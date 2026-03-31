const fs = require('fs');
const querySets = require('../test-data/result-query-sets');
const slotitem = JSON.parse(fs.readFileSync('parsed/api_mst_slotitem.json', 'utf8'));
const jsonstr = (a) => JSON.stringify(a).replace('[', '').replace(']', '').replace(/"/g, '');

function group2By(array,i,s){ const g={}; array.forEach(o=>{ const k = JSON.stringify(o[i]+o[s]); (g[k]||(g[k]=[])).push(o); }); return Object.values(g); }

function computeCounts(qset){
  const t = qset.expected.t.split(',').filter(x=>x!=='');
  const output = qset.expected.o.split(',').filter(x=>x!=='').map(Number);
  const extra = qset.expected.e ? qset.expected.e.split(',').filter(x=>x!=='').map(Number) : [];
  const q = qset.expected.q;
  const minlv = qset.expected.l === 'true';

  function filt(groups){
    const arr = [];
    groups.forEach(group=>{
      let ok = true;
      for(const oe of output){
        if(!group.some(x => x.o === oe)) { ok = false; break; }
      }
      if(ok && group[0].s !== 0){ arr.push(group); }
    });
    return arr;
  }

  let bigdata = [];
  for(const tt of t){
    const dumpPath = `dump/${q}${tt}.json`;
    if(!fs.existsSync(dumpPath)){
      throw new Error(`missing dump ${dumpPath}`);
    }
    const d = JSON.parse(fs.readFileSync(dumpPath, 'utf8'));
    const mapped = d.RECORDS.map(b => ({ i: b[0], s: b[1], o: b[2], n: b[3], l: b[4] }));
    bigdata = bigdata.concat(mapped);
  }

  const filted = filt(group2By(bigdata, 'i', 's'));
  const oute = output.concat(extra);
  const isonl = [];

  filted.forEach(arr => {
    let is = Array.isArray(arr[0].i) ? [...arr[0].i] : (typeof arr[0].i === 'string' ? JSON.parse(arr[0].i) : [arr[0].i]);
    if(q === 'd'){ if(!Array.isArray(is)) is = [is]; is.push(1); }
    is.push(arr[0].s);
    const onal = { i: is };
    arr.forEach(it => {
      const key = jsonstr(it.o);
      onal['n'+key] = (onal['n'+key] || 0) + Number(it.n);
      if(minlv){
        onal['l'+key] = onal['l'+key] !== undefined ? Math.min(onal['l'+key], Number(it.l)) : Math.min(121, Number(it.l));
      }
    });
    isonl.push(onal);
  });

  isonl.forEach(obj => {
    let denominator = 0;
    for(const k in obj){ if(k[0] === 'n') denominator += obj[k]; }
    obj.denominator = denominator;
    obj.ratio = 0;
    obj.times = 0;
    for(const k in obj){ if(k[0] === 'n'){ const key = k.slice(1); obj[ key ] = obj[k] / denominator; if(oute.includes(Number(key)) || oute.includes(key)){ obj.ratio += obj[key]; obj.times += obj[k]; }} }
  });

  return {
    filted: filted.length,
    isonl: isonl.length,
    first50: isonl.slice(0, 50),
  };
}

querySets.forEach(set => {
  try {
    const r = computeCounts(set);
    console.log(`${set.name}: filted=${r.filted}, isonl=${r.isonl}`);
  } catch (err) {
    console.log(`${set.name}: SKIPPED (${err.message})`);
  }
});
