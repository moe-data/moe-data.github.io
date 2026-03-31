const fs = require('fs')
const path = require('path')
const querySets = require('../test-data/result-query-sets')

const root = path.join(__dirname, '..')
const htmlFiles = fs.readdirSync(root).filter((f) => f.endsWith('.html'))

describe('Root HTML guard (改造 intentional error, others not)', () => {
  test.each(htmlFiles)('%s should be valid and have correct error behavior', (file) => {
    const html = fs.readFileSync(path.join(root, file), 'utf8')
    if (file === '改造.html') {
      expect(html).toMatch(/数据来源于萌萌数据库，数据仅供参考，具体以游戏内为准/)
    } else {
      expect(html).not.toMatch(/数据来源于萌萌数据库，数据仅供参考，具体以游戏内为准/)
    }
  })
})

function parseGetRequest(search, a, b) {
  let char = ''
  if (search.indexOf('?') !== -1) {
    const str = search.substr(1)
    const strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      const [key, val] = strs[i].split('=')
      if (a === key) {
        char = decodeURIComponent(val || '')
      }
    }
  }
  if (b === 1) {
    const array = char ? char.split(',') : []
    const filtered = array.filter((e) => e !== '')
    return filtered
  }
  if (!isNaN(char) && char !== '') {
    return Number(char)
  }
  return char
}

function computeResultSet(set) {
  const expected = set.expected
  const fs = require('fs')

  const t = expected.t.split(',').filter((x) => x !== '')
  const output = expected.o.split(',').filter((x) => x !== '').map(Number)
  const extra = expected.e ? expected.e.split(',').filter((x) => x !== '').map(Number) : []
  const q = expected.q
  const minlv = expected.l === 'true'

  function group2By(array, i, s) {
    const buckets = {}
    array.forEach((o) => {
      const key = JSON.stringify(o[i] + o[s])
      ;(buckets[key] ||= []).push(o)
    })
    return Object.values(buckets)
  }

  function filt(groups) {
    return groups.filter((group) => {
      if (group[0].s === 0) return false
      return output.every((oe) => group.some((item) => item.o === oe))
    })
  }

  let bigdata = []
  for (const tt of t) {
    const path = `dump/${q}${tt}.json`
    if (!fs.existsSync(path)) {
      throw new Error(`missing dump file ${path}`)
    }
    const d = JSON.parse(fs.readFileSync(path, 'utf8'))
    bigdata = bigdata.concat(d.RECORDS.map((b) => ({ i: b[0], s: b[1], o: b[2], n: b[3], l: b[4] })))
  }

  const filtedRecords = filt(group2By(bigdata, 'i', 's'))
  const oute = output.concat(extra)
  const isonl = []

  filtedRecords.forEach((arr) => {
    let is = Array.isArray(arr[0].i) ? [...arr[0].i] : (typeof arr[0].i === 'string' ? JSON.parse(arr[0].i) : [arr[0].i])
    if (q === 'd') {
      if (!Array.isArray(is)) is = [is]
      is.push(1)
    }
    is.push(arr[0].s)
    const onal = { i: is }

    arr.forEach((it) => {
      const key = String(it.o)
      onal['n' + key] = (onal['n' + key] || 0) + Number(it.n)
      if (minlv) {
        onal['l' + key] = onal['l' + key] !== undefined ? Math.min(onal['l' + key], Number(it.l)) : Math.min(121, Number(it.l))
      }
    })

    isonl.push(onal)
  })

  isonl.forEach((obj) => {
    let denominator = 0
    Object.keys(obj).forEach((k) => {
      if (k.startsWith('n')) {
        denominator += obj[k]
      }
    })
    obj.denominator = denominator
    obj.ratio = 0
    obj.times = 0
    Object.keys(obj).forEach((k) => {
      if (k.startsWith('n')) {
        const key = k.slice(1)
        obj[key] = obj[k] / denominator
        if (oute.includes(Number(key)) || oute.includes(key)) {
          obj.ratio += obj[key]
          obj.times += obj[k]
        }
      }
    })
  })

  return { filted: filtedRecords.length, isonl: isonl.length }
}

describe('result.html query processing cases', () => {
  beforeAll(() => {
    const jqueryDom = {
      on: jest.fn().mockReturnThis(),
      prop: jest.fn().mockReturnThis(),
      each: jest.fn().mockReturnThis(),
      ready: jest.fn().mockImplementation((fn) => fn && fn()),
      css: jest.fn().mockReturnThis(),
      append: jest.fn().mockReturnThis(),
    }

    global.$ = global.jQuery = jest.fn(() => jqueryDom)
    global.document = {
      documentElement: { innerHTML: '' },
      createElement: () => ({ textContent: '', appendChild: () => {} }),
      getElementById: () => ({ appendChild: () => {}, innerHTML: '' }),
      body: { appendChild: () => {} },
      write: () => {},
    }
    global.location = { search: '' }
    global.console = { ...console, error: jest.fn(), warn: jest.fn(), info: jest.fn(), log: jest.fn() }
  })

  const normalQuerySets = querySets.filter((set) => !set.name.includes('-must-fail'))
  const mustFailQuerySets = querySets.filter((set) => set.name.includes('-must-fail'))

  test.each(normalQuerySets)('$name $query', ({ name, query }) => {
    Object.defineProperty(global, 'location', { value: { search: query }, configurable: true })
    const parsed = {
      t: parseGetRequest(query, 't', 1),
      o: parseGetRequest(query, 'o', 1),
      e: parseGetRequest(query, 'e', 1),
      q: parseGetRequest(query, 'q', 1),
      s: parseGetRequest(query, 's'),
      a: parseGetRequest(query, 'a'),
      l: parseGetRequest(query, 'l'),
    }

    const set = querySets.find((set) => set.name === name)
    const expected = set.expected
    expect(parsed.t).toEqual(expected.t ? expected.t.split(',').filter((x) => x !== '') : [])
    expect(parsed.o).toEqual(expected.o ? expected.o.split(',').filter((x) => x !== '') : [])
    expect(parsed.e).toEqual(expected.e ? expected.e.split(',').filter((x) => x !== '') : [])
    expect(parsed.q).toEqual(expected.q ? expected.q.split(',').filter((x) => x !== '') : [])
    expect(parsed.s).toEqual(expected.s)
    expect(parsed.a).toEqual(Number(expected.a))
    expect(parsed.l).toEqual(expected.l)

    if (set.result) {
      const actual = computeResultSet(set)
      expect(actual.filted).toBe(set.result.filted)
      expect(actual.isonl).toBe(set.result.isonl)
    }

    expect(global.console.error).not.toHaveBeenCalled()
  })

  test('default-1 and default-2 should differ for o values', () => {
    const set1 = querySets.find((set) => set.name === 'default-1')
    const set2 = querySets.find((set) => set.name === 'default-2')
    expect(set1).toBeDefined()
    expect(set2).toBeDefined()

    const r1 = computeResultSet(set1)
    const r2 = computeResultSet(set2)

    expect(r1.filted).toBe(set1.result.filted)
    expect(r1.isonl).toBe(set1.result.isonl)
    expect(r2.filted).toBe(set2.result.filted)
    expect(r2.isonl).toBe(set2.result.isonl)

    expect(r1.filted).not.toBe(r2.filted)
    expect(r1.isonl).not.toBe(r2.isonl)
  })

  test.each(mustFailQuerySets)('$name should be invalid as expected', (set) => {
    const actual = computeResultSet(set)
    expect(actual.filted).not.toBe(set.result.filted)
    expect(actual.isonl).not.toBe(set.result.isonl)
  })
})
