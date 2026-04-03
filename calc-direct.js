const fs = require('fs');
const { jsonstr, group2By } = require('./dist/js/jgs.js');

const q = 'd';
const output = [201];
const extra = [];
const ranget = ['202603', '202602'];
const minlv = true;
const api_ = q === 'd' ? 'api_' : '';
const slotitem = JSON.parse(fs.readFileSync('parsed/api_mst_slotitem.json', 'utf8'));
const dump = (t) => JSON.parse(fs.readFileSync(`dump/${q}${t}.json`, 'utf8'));

const resourceTitle = { i: '', fuel:'', ammo:'', steel:'', bauxite:'', 資材:'', secretary:'', denominator:'', times:'', ratio:'', };
function isResource(e){ return ['i','fuel','ammo','steel','bauxite','資材','secretary','denominator'].includes(e); }
function bra(str){ return str; }
function formatOnlyname(value){ if (value===-1 || value==='-1') return 'fail'; let str = String(value); for (const item of slotitem){ if (item[api_ + 'id'] == value){ str = item[api_ + 'name']; return bra(str); } } return bra(str); }
function formatshipId(s){ return s; }
function egnrl(item){ resourceTitle['n'+item] = 0; resourceTitle[formatOnlyname(item)] = 0; if (minlv){ resourceTitle['l'+item] = 0; } }
function filt(r){ const arr=[]; for (const element of r){ let f=true; for (const oe of output){ let ff=false; for (const el of element){ if (el.o == oe) { ff=true; break; }} if (!ff){ f = false; break;} } if (f && element[0].s != 0){ arr.push(element);} } return arr; }

// load data
let bigdata=[];
for (const t of ranget){ const d = dump(t); if (!d || !d.RECORDS){ throw new Error('missing dump '+t); } 
    const objdata = d.RECORDS.map(b=>({i:b[0], s:b[1], o:b[2], n:b[3], l:b[4]}));
    bigdata = bigdata.concat(objdata);
}

const filted = filt(group2By(bigdata,'i','s'));
const oute = output.concat(extra);
let isonl = [];

for (const o of oute){ egnrl(o); }
if (q==='d'){ egnrl(-1); }
for (const arr of filted){
    let is = Array.isArray(arr[0].i)? [...arr[0].i] : (typeof arr[0].i === 'string' ? JSON.parse(arr[0].i) : [arr[0].i]);
    if (q==='d'){ if (!Array.isArray(is)){ is = [is]; } is.push(1); }
    is.push(formatshipId(arr[0].s));
    const onal = {i:is};
    for (const it of arr){ const item = jsonstr(it.o); egnrl(item); onal['n'+item] = (onal['n'+item]||0)+ Number(it.n);
        if (minlv){ onal['l'+item] = onal['l'+item] !== undefined ? Math.min(onal['l'+item], Number(it.l)) : Math.min(121, Number(it.l)); }
    }
    isonl.push(onal);
}

for (const e of isonl){ let denominator = 0; for (const opt in e){ if (opt[0]==='n'){ denominator += e[opt]; }} e.denominator = denominator; e.ratio = 0; e.times=0; for (const key in e){ if (key[0]==='n'){ const k=key.slice(1); e[formatOnlyname(k)] = e[key]/denominator; if (oute.includes(Number(k)) || oute.includes(k)) { e.ratio += e[formatOnlyname(k)]; e.times += e[key]; } } } }

console.log('filted count', filted.length, 'isonl count', isonl.length);
console.log('isonl first 50', JSON.stringify(isonl.slice(0,50), null, 0));
