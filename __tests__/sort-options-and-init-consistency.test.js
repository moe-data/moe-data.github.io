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

function loadVarFromScript(relPath, varName) {
  const code = readUtf8(relPath)
  const ctx = {}
  vm.createContext(ctx)
  vm.runInContext(code, ctx)
  if (!(varName in ctx)) {
    // `let/const` at top-level doesn't become a global property in vm contexts.
    // Fallback: parse the array/object literal from source.
    const declRe = new RegExp(String.raw`(?:^|\r?\n)\s*(?:var|let|const)\s+${varName}\s*=\s*([\s\S]*?);\s*(?:\r?\n|$)`)
    const declMatch = code.match(declRe)
    if (!declMatch) {
      throw new Error(`Failed to load global \`${varName}\` from ${relPath}`)
    }
    const literal = declMatch[1]
    const sandbox = {}
    vm.createContext(sandbox)
    vm.runInContext(`result = (${literal})`, sandbox)
    return { value: sandbox.result, code }
  }
  return { value: ctx[varName], code }
}

function expectUniqueIntegerIds(arr, label) {
  expect(Array.isArray(arr)).toBe(true)
  expect(arr.length).toBeGreaterThan(0)
  expect(arr.every((v) => v !== undefined && v !== null)).toBe(true)
  const ids = arr.map(Number)
  expect(ids.every((n) => Number.isFinite(n) && Number.isInteger(n))).toBe(true)
  expect(new Set(ids).size).toBe(ids.length)
  return ids
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
    const seenGroupKeys = new Set()
    let m
    while ((m = groupRegex.exec(initCode))) {
      const commentGroupName = m[1].trim()
      const commentNamesRaw = m[2].trim()
      const objectKey = m[3].trim()

      seenGroups.push({ commentGroupName, objectKey })
      seenGroupKeys.add(objectKey)
      expect(objectKey).toBe(commentGroupName)

      // Reject missing groups / unexpected shapes.
      expect(Array.isArray(init[objectKey])).toBe(true)
      const raw = init[objectKey]
      // Reject holes like [1, 2,, 3] and undefined/null entries.
      expect(raw.every((v) => v !== undefined && v !== null)).toBe(true)

      const ids = raw.map(Number)
      expect(ids.length).toBeGreaterThan(0)
      // Must all be finite integers (no NaN from things like '' or undefined).
      expect(ids.every((n) => Number.isFinite(n) && Number.isInteger(n))).toBe(true)
      expect(new Set(ids).size).toBe(ids.length) // unique ids inside each group

      // -1 is a sentinel only allowed in "其の他" group (represents 无效值).
      if (objectKey === '其の他') {
        expect(ids.filter((x) => x === -1).length).toBe(1)
      } else {
        expect(ids.includes(-1)).toBe(false)
      }

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

    // Ensure every init group is validated by the regex (prevents silent pass when a line format breaks).
    const initKeys = Object.keys(init)
    expect(initKeys.length).toBeGreaterThan(0)
    expect(seenGroupKeys.size).toBe(initKeys.length)
    for (const k of initKeys) {
      expect(seenGroupKeys.has(k)).toBe(true)
    }
  })

  test('sortby/all.js developable list has no duplicate ids', () => {
    const { value: developable } = loadVarFromScript('dist/items/developable/sortby/all.js', 'developable')
    expectUniqueIntegerIds(developable, 'developable')
  })

  test('sortby/releasetime.js has no duplicate ids per date', () => {
    const { value: releasetime } = loadVarFromScript('dist/items/developable/sortby/releasetime.js', 'releasetime')
    expect(releasetime && typeof releasetime === 'object').toBe(true)

    for (const [date, ids] of Object.entries(releasetime)) {
      // allow the historical sentinel -1 in the initial "2013/04/23" bucket
      expect(Array.isArray(ids)).toBe(true)
      const nums = ids.map(Number)
      expect(nums.every((n) => Number.isFinite(n) && Number.isInteger(n))).toBe(true)
      expect(new Set(nums).size).toBe(nums.length)
      // basic sanity on key format (not strict, but catches accidental non-date keys)
      expect(String(date)).toMatch(/^\d{4}\/\d{2}\/\d{2}$/)
    }
  })

  test('all.js, init.js, releasetime.js have exact cross-file ID coverage', () => {
    const { value: developable } = loadVarFromScript('dist/items/developable/sortby/all.js', 'developable')
    const { value: init } = loadVarFromScript('dist/items/developable/sortby/init.js', 'init')
    const { value: releasetime } = loadVarFromScript('dist/items/developable/sortby/releasetime.js', 'releasetime')

    const allSet = new Set(expectUniqueIntegerIds(developable, 'developable'))

    const initIds = Object.entries(init).flatMap(([group, ids]) => {
      expect(Array.isArray(ids)).toBe(true)
      return ids
    })
    const initSet = new Set(expectUniqueIntegerIds(initIds.filter((x) => Number(x) !== -1), 'init union'))

    const releaseIds = Object.entries(releasetime).flatMap(([date, ids]) => {
      expect(Array.isArray(ids)).toBe(true)
      return ids
    })
    const releaseSet = new Set(expectUniqueIntegerIds(releaseIds.filter((x) => Number(x) !== -1), 'releasetime union'))

    expect(initSet).toEqual(allSet)
    expect(releaseSet).toEqual(allSet)
  })
})

