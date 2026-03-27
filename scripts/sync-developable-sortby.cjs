const fs = require('fs')
const path = require('path')
const vm = require('vm')
const { execSync } = require('child_process')

const ROOT = path.resolve(__dirname, '..')
const FILES = {
  all: path.join(ROOT, 'dist/items/developable/sortby/all.js'),
  init: path.join(ROOT, 'dist/items/developable/sortby/init.js'),
  releasetime: path.join(ROOT, 'dist/items/developable/sortby/releasetime.js'),
  slotitem: path.join(ROOT, 'parsed/api_mst_slotitem.json'),
  ship: path.join(ROOT, 'parsed/api_mst_ship.json'),
}

const INIT_GROUP_ORDER = [
  '主砲',
  '副砲',
  '魚雷',
  '艦上攻撃機',
  '艦上戦闘機',
  '艦上爆撃機',
  '水偵水爆',
  '陸上攻撃機',
  '電探',
  '増設',
  '砲弾',
  'ソナー/爆雷',
  '艦上偵察機',
  '其の他',
]

const TYPE_TO_GROUP = {
  1: '主砲',
  2: '主砲',
  3: '主砲',
  4: '副砲',
  95: '副砲',
  5: '魚雷',
  22: '魚雷',
  32: '魚雷',
  51: '魚雷',
  8: '艦上攻撃機',
  58: '艦上攻撃機',
  6: '艦上戦闘機',
  45: '艦上戦闘機',
  56: '艦上戦闘機',
  7: '艦上爆撃機',
  57: '艦上爆撃機',
  10: '水偵水爆',
  11: '水偵水爆',
  41: '水偵水爆',
  47: '陸上攻撃機',
  48: '陸上攻撃機',
  49: '陸上攻撃機',
  53: '陸上攻撃機',
  12: '電探',
  13: '電探',
  93: '電探',
  16: '増設',
  17: '増設',
  27: '増設',
  28: '増設',
  18: '砲弾',
  19: '砲弾',
  20: '砲弾',
  21: '砲弾',
  14: 'ソナー/爆雷',
  15: 'ソナー/爆雷',
  40: 'ソナー/爆雷',
  9: '艦上偵察機',
  25: '艦上偵察機',
  26: '艦上偵察機',
  94: '艦上偵察機',
}

function read(filePath) {
  return fs.readFileSync(filePath, 'utf-8')
}

function writeIfChanged(filePath, content) {
  const current = read(filePath)
  if (current === content) return false
  fs.writeFileSync(filePath, content, 'utf-8')
  return true
}

function parseJsVar(filePath, varName) {
  const code = read(filePath)
  const ctx = {}
  vm.createContext(ctx)
  vm.runInContext(code, ctx)
  if (Object.prototype.hasOwnProperty.call(ctx, varName)) {
    return ctx[varName]
  }

  const re = new RegExp(String.raw`(?:^|\r?\n)\s*(?:var|let|const)\s+${varName}\s*=\s*([\s\S]*?);\s*(?:\r?\n|$)`)
  const match = code.match(re)
  if (!match) {
    throw new Error(`Cannot parse ${varName} in ${filePath}`)
  }
  const sandbox = {}
  vm.createContext(sandbox)
  vm.runInContext(`result = (${match[1]})`, sandbox)
  return sandbox.result
}

function normalizeName(name) {
  return String(name).replace(/\s+/g, '')
}

function uniqueSorted(nums) {
  return [...new Set(nums.map(Number))].sort((a, b) => a - b)
}

function getShipLastUpdateDate() {
  const relPath = path.relative(ROOT, FILES.ship).replace(/\\/g, '/')
  const date = execSync(`git log -1 --format=%cs -- "${relPath}"`, {
    cwd: ROOT,
    encoding: 'utf-8',
  })
    .trim()
    .replace(/-/g, '/')
  if (!/^\d{4}\/\d{2}\/\d{2}$/.test(date)) {
    throw new Error(`Invalid git date for ${relPath}: "${date}"`)
  }
  return date
}

function serializeAll(developable) {
  return `let developable = [${developable.join(', ')}];\n`
}

function serializeInit(initObj, idToName) {
  const lines = []
  lines.push('var init = {')
  for (let i = 0; i < INIT_GROUP_ORDER.length; i++) {
    const group = INIT_GROUP_ORDER[i]
    const ids = uniqueSorted(initObj[group] || [])
    const names = ids.map((id) => (id === -1 ? '无效值' : idToName.get(id) || `UNKNOWN_${id}`))
    lines.push(`  // ${group}：${names.join(',')}`)
    lines.push(`  "${group}": [${ids.join(', ')}]${i < INIT_GROUP_ORDER.length - 1 ? ',' : ''}`)
  }
  lines.push('};')
  lines.push('')
  return `${lines.join('\n')}\n`
}

function serializeReleasetime(releaseObj) {
  const keys = Object.keys(releaseObj).sort((a, b) => (a > b ? -1 : a < b ? 1 : 0))
  const lines = []
  lines.push('/**')
  lines.push(' * 舰娘装备开发解禁时间映射表')
  lines.push(' * key: 解禁日期（格式：YYYY/MM/DD）')
  lines.push(' * value: 对应解禁的装备编号数组')
  lines.push(' */')
  lines.push('var releasetime = {')
  keys.forEach((key, index) => {
    const ids = uniqueSorted(releaseObj[key] || [])
    lines.push(`  "${key}": [${ids.join(', ')}]${index < keys.length - 1 ? ',' : ''}`)
  })
  lines.push('}')
  lines.push('')
  return `${lines.join('\n')}\n`
}

function main() {
  const developableRaw = parseJsVar(FILES.all, 'developable')
  const init = parseJsVar(FILES.init, 'init')
  const releasetime = parseJsVar(FILES.releasetime, 'releasetime')
  const slotitems = JSON.parse(read(FILES.slotitem))

  const idToItem = new Map(slotitems.map((s) => [Number(s.api_id), s]))
  const idToName = new Map(slotitems.map((s) => [Number(s.api_id), String(s.api_name)]))

  const developable = uniqueSorted(developableRaw)
  const initWork = {}
  INIT_GROUP_ORDER.forEach((g) => {
    initWork[g] = uniqueSorted(Array.isArray(init[g]) ? init[g] : [])
  })
  const releaseWork = {}
  Object.keys(releasetime).forEach((k) => {
    releaseWork[k] = uniqueSorted(Array.isArray(releasetime[k]) ? releasetime[k] : [])
  })

  const initKnown = new Set(INIT_GROUP_ORDER.flatMap((g) => initWork[g]).filter((x) => x !== -1))
  const releaseKnown = new Set(Object.values(releaseWork).flat().filter((x) => x !== -1))
  const missingFromInit = developable.filter((id) => !initKnown.has(id))
  const missingFromRelease = developable.filter((id) => !releaseKnown.has(id))

  const shipDate = getShipLastUpdateDate()
  if (!releaseWork[shipDate]) releaseWork[shipDate] = []

  for (const id of missingFromInit) {
    const item = idToItem.get(id)
    if (!item) {
      throw new Error(`api_id ${id} is in all.js but not found in parsed/api_mst_slotitem.json`)
    }
    const type2 = Number((item.api_type || [])[2])
    const group = TYPE_TO_GROUP[type2] || '其の他'
    const targetGroup = INIT_GROUP_ORDER.includes(group) ? group : '其の他'
    initWork[targetGroup].push(id)
  }
  INIT_GROUP_ORDER.forEach((g) => {
    initWork[g] = uniqueSorted(initWork[g])
  })

  for (const id of missingFromRelease) {
    releaseWork[shipDate].push(id)
  }
  Object.keys(releaseWork).forEach((k) => {
    releaseWork[k] = uniqueSorted(releaseWork[k])
  })

  const changedFiles = []
  if (writeIfChanged(FILES.all, serializeAll(developable))) changedFiles.push(FILES.all)
  if (writeIfChanged(FILES.init, serializeInit(initWork, idToName))) changedFiles.push(FILES.init)
  if (writeIfChanged(FILES.releasetime, serializeReleasetime(releaseWork))) changedFiles.push(FILES.releasetime)

  if (changedFiles.length) {
    console.log('Updated files:')
    changedFiles.forEach((f) => console.log(`- ${path.relative(ROOT, f).replace(/\\/g, '/')}`))
  } else {
    console.log('No sync changes needed.')
  }
}

main()
