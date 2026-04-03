const fs = require('fs');
const path = require('path');
const querySets = require('../test-data/result-query-sets');
const jgs = require('../dist/js/jgs.js');

function loadDump(q, t) {
  const p = path.join(process.cwd(), 'dump', `${q}${t}.json`);
  if (!fs.existsSync(p)) throw new Error(`missing dump ${p}`);
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function toArrayI(i) {
  if (Array.isArray(i)) return i;
  if (typeof i === 'string') return JSON.parse(i);
  return [i];
}

function filtGroups(groups, output) {
  const arr = [];
  groups.forEach((element) => {
    let f = true;
    for (let k = 0; k < output.length; k++) {
      const oe = output[k];
      let ff = false;
      for (let j = 0; j < element.length; j++) {
        if (element[j]['o'] == oe) {
          ff = true;
          break;
        }
      }
      if (!ff) {
        f = false;
        break;
      }
    }
    if (f && element[0]['s'] != 0) arr.push(element);
  });
  return arr;
}

const out = [];
for (const set of querySets) {
  const name = set.name;
  const expected = set.expected;
  const t = (expected.t || '').split(',').filter((x) => x !== '');
  const output = (expected.o || '').split(',').filter((x) => x !== '').map((x) => Number(x));
  const extra = expected.e ? expected.e.split(',').filter((x) => x !== '').map(Number) : [];
  const q = expected.q || 'c';
  const minlv = expected.l === 'true';

  // set global api_ for jgs.formatOnlyname
  global.api_ = q === 'd' ? 'api_' : '';

  let bigdata = [];
  for (const tt of t) {
    const d = loadDump(q, tt);
    const mapped = d.RECORDS.map((b) => ({ i: b[0], s: b[1], o: b[2], n: b[3], l: b[4] }));
    bigdata = bigdata.concat(mapped);
  }

  const groups = jgs.group2By(bigdata, 'i', 's');
  const filted = filtGroups(groups, output);
  const oute = output.concat(extra);

  const isonl = [];
  filted.forEach((arr) => {
    let is = Array.isArray(arr[0].i) ? [...arr[0].i] : (typeof arr[0].i === 'string' ? JSON.parse(arr[0].i) : [arr[0].i]);
    if (q === 'd') {
      if (!Array.isArray(is)) is = [is];
      is.push(1);
    }
    is.push(arr[0].s);
    const onal = { i: is };
    arr.forEach((it) => {
      const key = jgs.jsonstr(it.o);
      onal['n' + key] = (onal['n' + key] || 0) + Number(it.n);
      if (minlv) {
        onal['l' + key] = onal['l' + key] !== undefined ? Math.min(onal['l' + key], Number(it.l)) : Math.min(121, Number(it.l));
      }
    });
    isonl.push(onal);
  });

  // compute denominators, ratios, times and add name keys
  isonl.forEach((obj) => {
    let denominator = 0;
    for (const k in obj) {
      if (k[0] === 'n') denominator += obj[k];
    }
    obj.denominator = denominator;
    obj.ratio = 0;
    obj.times = 0;
    for (const k in obj) {
      if (k[0] === 'n') {
        const key = k.slice(1);
        obj[key] = obj[k] / obj.denominator;
        // add name mapping for display (use formatOnlyname/formatshipId)
        try {
          if (q === 'd') {
            const name = typeof jgs.formatOnlyname === 'function' ? jgs.formatOnlyname(key) : key;
            if (name !== key) obj[name] = obj[key];
          } else {
            const name = typeof jgs.formatshipId === 'function' ? jgs.formatshipId(key) : key;
            if (name !== key) obj[name] = obj[key];
          }
        } catch (e) {
          // ignore
        }
        if (oute.includes(Number(key)) || oute.includes(key)) {
          obj.ratio += obj[key];
          obj.times += obj['n' + key];
        }
      }
    }
  });

  out.push({ name, expected, actual: { filted: filted.length, isonl: isonl.length, first10: isonl.slice(0, 10) } });
}

fs.writeFileSync(path.join(process.cwd(), 'test-data', 'result-query-first10.json'), JSON.stringify(out, null, 2), 'utf8');
console.log('Wrote test-data/result-query-first10.json');
