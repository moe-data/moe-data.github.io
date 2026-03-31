const fs = require('fs');
const path = require('path');
const {JSDOM} = require('jsdom');

// Setup DOM
const html = fs.readFileSync(path.join(__dirname, 'result.html'), 'utf8');
const dom = new JSDOM(html, { url: 'http://localhost/result.html?t=202603,202602&q=d&o=201&e=&s=times&a=0&l=true' });
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.location = dom.window.location;

// Capture console.info output
const info = [];
const origConsoleInfo = console.info;
console.info = (...args) => { info.push(args); origConsoleInfo(...args); };

// Basic stubs for required functions
global.formatOnlyname = (id) => String(id);
global.bra = (str, n) => str;
global.havelang = true;
global.addemoji = (str) => str;
global.loadprot = () => {};
global.addcol = () => {};
global.initTable = () => {};
global.setlang = () => {};
global.locallang = () => 'en-US';
global.em = 0;
global.getname = (e, kj) => e;
global.devpic = '';
global.fail = 'fail';
global.thclr = () => {};
global.formatshipId = (s) => s;
global.formatItemId = (s) => s;
global.sortby = (a,b) => (a.times || 0) - (b.times || 0);
global.qndate = (x) => x;
function qndate(x){return x;}

global.$ = function(sel) {
  const fakeElement = {innerHTML: '', value: '', selected: false};
  const o = {
    0: fakeElement,
    css: () => o,
    val: (v) => v === undefined ? 100 : v,
    hide: () => o,
    show: () => o,
    load: () => o,
    change: () => o,
    append: () => o,
    on: () => o,
    prop: () => o,
    each: () => o,
    ready: () => o,
    text: (t) => t ? o : '',
    length: 1,
    bootstrapTable: () => o,
  };
  if (sel === 'h3.panel-title' || sel === 'div.panel') {
    o[0] = { innerHTML: ''};
  }
  if (sel === '#locale') {
    o.length = 1;
    o[0] = { value: 'en', selected: false };
    o.change = (cb)=> { cb(); return o; };
  }
  return o;
};

function GetRequest(a,b){
  const params = {t:'202603,202602',q:'d',o:'201',e:'',s:'times',a:'0',l:'true'};
  let char = params[a] || '';
  if(b===1){
    const arr = char ? char.split(',') : [];
    return arr.filter(x => x !== '');
  }
  if(!isNaN(char) && char !== '') return Number(char);
  return char;
}

global.GetRequest = GetRequest;

const jgsCode = fs.readFileSync(path.join(__dirname,'dist/js/jgs.js'),'utf8');
const vm = require('vm');
const context = vm.createContext(global);
vm.runInContext(jgsCode, context);
// restore our test GetRequest stub after jgs overwrote it
global.GetRequest = GetRequest;

const parsedDir = path.join(__dirname,'parsed');

global.$.getJSON = function(url){
  return {
    done(cb){
      if(url.includes('parsed/ship.json')){
        cb(JSON.parse(fs.readFileSync(path.join(parsedDir,'ship.json'),'utf8')));
      } else if(url.includes('parsed/api_mst_slotitem.json')){
        cb(JSON.parse(fs.readFileSync(path.join(parsedDir,'api_mst_slotitem.json'),'utf8')));
      } else if(url.includes('dump/')){
        const name = url.replace('dump/','');
        const content = fs.readFileSync(path.join(__dirname,'dump',name),'utf8');
        cb(JSON.parse(content));
      } else {
        cb({});
      }
      return {fail:()=>{}};
    },
    fail(){return this;}
  };
};

global.$.get = function(){return {done:(cb)=>{cb(''); return {fail:()=>{}};}};};
global.$.cookie = () => {};

global.$.fn = {};

global.Width = () => 100; // stub for result page layout

global.Height = () => 100; // stub potential other usage

const calcCode = fs.readFileSync(path.join(__dirname,'dist/js/calc.js'),'utf8');
vm.runInContext(calcCode, context);
const getdataCode = fs.readFileSync(path.join(__dirname,'dist/js/getdata.js'),'utf8');
vm.runInContext(getdataCode, context);

const zcalls = info.filter(x => Array.isArray(x[0]) || (x.length===2 && Array.isArray(x[1])));
console.log('zcalls length:', zcalls.length);
if(zcalls.length > 0){
  const last = zcalls[zcalls.length - 1];
  const filted = Array.isArray(last[0]) ? last[0] : last[1];
  const isonl = Array.isArray(last[0]) ? last[1] : last[0];
  console.log('filted length', filted.length, 'isonl length', isonl.length);
  console.log('isonl first 50:', JSON.stringify(isonl.slice(0,50), null, 0));
}
