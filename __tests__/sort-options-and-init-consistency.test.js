const fs = require('fs')
const path = require('path')
const vm = require('vm')

function readUtf8(relPath) {
  return fs.readFileSync(path.join(__dirname, '..', relPath), 'utf-8')
}

function loadInitObject() {
  const initCode = readUtf8('dist/items/developable/sortby/init.js')
  const ctx = {}
  vm.createContext(ctx)
  vm.runInContext(initCode, ctx)
  if (!ctx.init || typeof ctx.init !== 'object') {
    throw new Error('Failed to load global `init` from init.js')
  }
  return { init: ctx.init, initCode }
}

function normalizeName(s) {
  // Ignore whitespace differences like "120mm/50連装砲" vs "120mm/50 連装砲"
  return String(s)
    .replace(/\s+/g, '')
    .replace(/[＆&]/g, '&')
    .replace(/発射管/g, '')
}

describe('Sort options + init.js consistency', () => {
  test('index.html #sort option values are expected and unique', () => {
    const html = readUtf8('index.html')

    const selectMatch = html.match(/<select[^>]*id=["']sort["'][\s\S]*?<\/select>/i)
    expect(selectMatch).not.toBeNull()

    const selectHtml = selectMatch[0]
    const optionValueMatches = [...selectHtml.matchAll(/<option[^>]*value=["']([^"']+)["'][^>]*>/gi)]
    const values = optionValueMatches.map((m) => m[1])

    // Keep this list aligned with index.html (lines 101-108) intentionally.
    const expected = ['-2', '-1', '3', 'api_rare', 'api_tyku', '2', '1', '0']

    expect(values).toEqual(expected)
    expect(new Set(values).size).toBe(values.length)
  })

  test('init.js group comments match api_mst_slotitem names (prevents id/name mismatch like 20->201)', () => {
    const slotitems = JSON.parse(readUtf8('parsed/api_mst_slotitem.json'))
    const idToName = new Map(slotitems.map((e) => [Number(e.api_id), String(e.api_name)]))

    const { init, initCode } = loadInitObject()

    // Enforce global uniqueness: one api_id must belong to only one group in init.js.
    // This prevents mistakes like adding id=1 (12cm単装砲) into "陸上攻撃機" while it already exists in "主砲".
    const globalOwnerById = new Map() // id -> group name

    // init.js format:
    //   // 分组名：装备1,装备2,...
    //   "分组名": [id1, id2, ...],
    //
    // We validate: each comment-listed name exists in the corresponding id list after mapping id->api_name.
    const groupRegex = /\/\/\s*([^：\r\n]+)\s*：([^\r\n]*)\r?\n\s*"([^"]+)"\s*:\s*\[([^\]]*)\]/g

    const seenGroups = []
    let m
    while ((m = groupRegex.exec(initCode))) {
      const commentGroupName = m[1].trim()
      const commentNamesRaw = m[2].trim()
      const objectKey = m[3].trim()

      seenGroups.push({ commentGroupName, objectKey })
      expect(objectKey).toBe(commentGroupName)

      const ids = Array.isArray(init[objectKey]) ? init[objectKey].map(Number) : []
      expect(ids.length).toBeGreaterThan(0)
      expect(new Set(ids).size).toBe(ids.length) // unique ids inside each group

      for (const id of ids) {
        if (id === -1) continue
        const prevOwner = globalOwnerById.get(id)
        if (prevOwner && prevOwner !== objectKey) {
          throw new Error(`Duplicate api_id ${id} across init groups: "${prevOwner}" and "${objectKey}"`)
        }
        globalOwnerById.set(id, objectKey)
      }

      const mappedNames = ids
        .map((id) => {
          if (id === -1) return '无效值'
          return idToName.get(id)
        })
        .filter(Boolean)
        .map(normalizeName)

      const commentNames = commentNamesRaw
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0)
        .map(normalizeName)

      // Each listed name should be present in mapped names.
      // This catches the earlier bug where 紫電一一型 was listed but the id was wrong.
      for (const expectedName of commentNames) {
        expect(mappedNames).toContain(expectedName)
      }
    }

    expect(seenGroups.length).toBeGreaterThan(0)
  })
})

