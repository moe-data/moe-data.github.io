const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');

// 加载页面实际依赖的所有脚本
const scriptPaths = [
  '../dist/js/cdn/jquery.min.js',
  '../dist/js/jgs.js',
  '../dist/js/simplize.js',
  '../dist/js/share.js',
  '../dist/js/table.js',
  '../dist/js/line.js',
  '../dist/js/scatter.js',
  '../dist/js/item.js',
];

const scriptCodes = scriptPaths.map(scriptPath =>
  fs.readFileSync(path.join(__dirname, scriptPath), 'utf-8')
);

describe('查询按钮点击 - o 参数不重复增长 (TDD)', () => {
  let capturedUrls = [];
  let currentHref = 'https://moe-data.github.io/index.html';

  const mockLocation = {
    assign: jest.fn((url) => {
      const fullUrl = new URL(url, currentHref).href;
      currentHref = fullUrl;
      capturedUrls.push(fullUrl);
    }),
    replace: jest.fn((url) => {
      const fullUrl = new URL(url, currentHref).href;
      currentHref = fullUrl;
      capturedUrls.push(fullUrl);
    }),
    reload: jest.fn(),
    get href() { return currentHref; },
    set href(url) {
      const fullUrl = new URL(url, currentHref).href;
      currentHref = fullUrl;
      capturedUrls.push(fullUrl);
    },
    get search() { return new URL(currentHref).search; },
    set search(val) {
      const u = new URL(currentHref);
      u.search = val;
      currentHref = u.href;
    },
    get origin() { return 'https://moe-data.github.io'; },
    get pathname() { return '/index.html'; },
    toString: () => currentHref,
  };

  // 增强 jQuery mock：支持真实事件绑定（direct + delegated）和链式
  global.jQuery = global.$ = function(selector) {
    if (typeof selector === 'function') {
      selector(); // $(fn) ready
      return mockJQuery;
    }
    const elements = (selector === document) ? [document] : Array.from(document.querySelectorAll(selector));
    const jqObj = {
      elements,
      length: elements.length,
      on: function(event, sel, fn) {
        if (typeof sel === 'function') {
          fn = sel;
          sel = undefined;
        }
        elements.forEach(el => {
          const handler = sel
            ? (e) => {
                const target = e.target.closest(sel);
                if (target) fn.call(target, e);
              }
           