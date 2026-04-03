const fs = require('fs')
const path = require('path')
const util = require('util')

const querySets = require('../test-data/result-query-sets')
const fixturePath = path.join(process.cwd(), 'test-data', 'result-query-first10.json')
if (!fs.existsSync(fixturePath)) {
  console.error('Missing fixture', fixturePath)
  process.exit(2)
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
        try {
          if (q === 'd') {
            const name = typeof formatOnlyname === 'function' ? formatOnlyname(key) : key
            if (name !== key) obj[name] = obj[key]
          } else {
            const name = typeof formatshipId === 'function' ? formatshipId(key) : key
            if (name !== key) obj[name] = obj[key]
          }
        } catch (e) {
          // ignore
        }
        if (oute.includes(Number(key)) || oute.includes(key)) {
          obj.ratio += obj[key]
          obj.times += obj['n' + key]
        }
      }
    }
  })

  return { filted: filted.length, isonl: isonl.length, first10: isonl.slice(0, 10) }
}

let failed = 0
for (const set of querySets) {
  const expected = fixtureMap.get(set.name)
  if (!expected) {
    console.log('no fixture for', set.name)
    continue
  }
  const actual = computeCounts(set)
  if (JSON.stringify(actual.first10) !== JSON.stringify(expected.actual.first10)) {
    failed++
    console.log('\n--- MISMATCH:', set.name, '---')
    console.log('expected.first10 (truncated):')
    console.log(util.inspect(expected.actual.first10, { depth: 3, colors: false, maxArrayLength: 5 }))
    console.log('actual.first10 (truncated):')
    console.log(util.inspect(actual.first10, { depth: 3, colors: false, maxArrayLength: 5 }))
    // write full dumps for manual inspection
    fs.writeFileSync(path.join(process.cwd(), `temp-first10-diff-${set.name}.json`), JSON.stringify({ name: set.name, expected: expected.actual.first10, actual: actual.first10 }, null, 2), 'utf8')
    console.log('Wrote', `temp-first10-diff-${set.name}.json`)
  }
}

if (failed === 0) {
  console.log('All first10 match fixtures')
  process.exit(0)
} else {
  console.log('Mismatched sets:', failed)
  process.exit(3)
}
