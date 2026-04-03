/**
 * @jest-environment node
 */

const fs = require('fs')
const path = require('path')

const querySets = require('../test-data/result-query-sets')
const fixturePath = path.join(process.cwd(), 'test-data', 'result-query-first10.json')

if (!fs.existsSync(fixturePath)) {
  throw new Error('Missing fixture test-data/result-query-first10.json; please generate it before running tests')
}

const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8'))
const fixtureMap = new Map(fixture.map((e) => [e.name, e]))
const { jsonstr, group2By, formatOnlyname, formatshipId } = require('../dist/js/jgs.js')

function computeCounts(qset) {
  const t = (qset.expected.t || '').split(',').filter((x) => x !== '')
  const output = (qset.expected.o || '').split(',').filter((x) => x !== '').map((x) => Number(x))
  const extra = qset.expected.e ? qset.expected.e.split(',').filter((x) => x !== '').map((x) => Number(x)) : []
  const q = qset.expected.q || 'c'
  const minlv = qset.expected.l === 'true'

  // Ensure formatOnlyname/formatshipId behave like generator when running in Node
  global.api_ = q === 'd' ? 'api_' : ''

  function filt(groups) {
    const arr = []
    groups.forEach((group) => {
      let ok = true
      for (const oe of output) {
        if (!group.some((x) => x.o === oe)) {
          ok = false
          break
        }
      }
      if (ok && group[0].s !== 0) arr.push(group)
    })
    return arr
  }

  let bigdata = []
  for (const tt of t) {
    const dumpPath = path.join(process.cwd(), 'dump', `${q}${tt}.json`)
    if (!fs.existsSync(dumpPath)) {
      throw new Error(`missing dump ${dumpPath}`)
    }
    const d = JSON.parse(fs.readFileSync(dumpPath, 'utf8'))
    const mapped = d.RECORDS.map((b) => ({ i: b[0], s: b[1], o: b[2], n: b[3], l: b[4] }))
    bigdata = bigdata.concat(mapped)
  }

  const filted = filt(group2By(bigdata, 'i', 's'))
  const oute = output.concat(extra)
  const isonl = []

  filted.forEach((arr) => {
    let is = Array.isArray(arr[0].i) ? [...arr[0].i] : (typeof arr[0].i === 'string' ? JSON.parse(arr[0].i) : [arr[0].i])
    if (q === 'd') {
      if (!Array.isArray(is)) is = [is]
      is.push(1)
    }
    is.push(arr[0].s)
    const onal = { i: is }
    arr.forEach((it) => {
      const key = jsonstr(it.o)
      onal['n' + key] = (onal['n' + key] || 0) + Number(it.n)
      if (minlv) {
        onal['l' + key] = onal['l' + key] !== undefined ? Math.min(onal['l' + key], Number(it.l)) : Math.min(121, Number(it.l))
      }
    })
    isonl.push(onal)
  })

  isonl.forEach((obj) => {
    let denominator = 0
    for (const k in obj) {
      if (k[0] === 'n') denominator += obj[k]
    }
    obj.denominator = denominator
    obj.ratio = 0
    obj.times = 0
    for (const k in obj) {
      if (k[0] === 'n') {
        const key = k.slice(1)
        obj[key] = obj[k] / obj.denominator
        // attempt to add human-readable name mapping (match generator)
        try {
          if (q === 'd') {
            const name = typeof formatOnlyname === 'function' ? formatOnlyname(key) : key
            if (name !== key) obj[name] = obj[key]
          } else {
            const name = typeof formatshipId === 'function' ? formatshipId(key) : key
            if (name !== key) obj[name] = obj[key]
          }
        } catch (e) {
          // ignore lookup errors
        }
        if (oute.includes(Number(key)) || oute.includes(key)) {
          obj.ratio += obj[key]
          obj.times += obj[k]
        }
      }
    }
  })

  return { filted: filted.length, isonl: isonl.length, first10: isonl.slice(0, 10) }
}

describe('result-query regression (first-10 + counts)', () => {
  test('calc.js exists', () => {
    const calcPath = path.join(process.cwd(), 'dist', 'js', 'calc.js')
    expect(fs.existsSync(calcPath)).toBe(true)
  })

  for (const qset of querySets) {
    const name = qset.name
    test(name, () => {
      const expected = fixtureMap.get(name)
      expect(expected).toBeDefined()
      const actual = computeCounts(qset)
      expect(actual.filted).toBe(expected.actual.filted)
      expect(actual.isonl).toBe(expected.actual.isonl)
      expect(actual.first10).toEqual(expected.actual.first10)
    })
  }
})
