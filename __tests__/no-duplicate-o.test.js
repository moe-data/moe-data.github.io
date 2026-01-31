const fs = require('fs')
const path = require('path')

const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8')

// 加载页面实际依赖的所有脚本
const scriptPaths = [
  '../dist/js/cdn/jquery.min.js',
  '../dist/js/cdn/bootstrap.js',
  '../dist/js/jgs.js',
  '../dist/js/simplize.js',
  '../dist/js/share.js',
  '../dist/js/table.js',
  '../dist/js/scatter.js',
  '../dist/js/item.js',
  '../dist/js/calc.js',
]

const scriptCodes = scriptPaths.map((scriptPath) => fs.readFileSync(path.join(__dirname, scriptPath), 'utf-8'))

describe('查询按钮点击 - o 参数不重复增长 (TDD)', () => {
  // 增强 jQuery mock，支持 direct 和 delegated 事件绑定 + 常用方法
  global.jQuery = global.$ = function (selector) {
    if (typeof selector === 'function') {
      selector() // $(fn) 立即执行 ready
      return { ready: jest.fn() }
    }
    const elements = selector === document ? [document] : Array.from(document.querySelectorAll(selector || ''))
    return {
      elements,
      on: function (event, childSelector, handler) {
        if (typeof childSelector === 'function') {
          handler = childSelector
          childSelector = undefined
        }
        elements.forEach((el) => {
          const finalHandler = childSelector
            ? (e) => {
                const target = e.target.matches(childSelector) ? e.target : e.target.closest(childSelector)
                if (target) handler.call(target, e)
              }
            : handler
          el.addEventListener(event, finalHandler, false)
        })
        return this
      },
      css: jest.fn().mockReturnThis(),
      hide: jest.fn().mockReturnThis(),
      show: jest.fn().mockReturnThis(),
      val: jest.fn(() => ''),
      prop: jest.fn().mockReturnThis(),
      each: jest.fn((fn) => {
        elements.forEach((el, i) => fn(i, el))
        return this
      }),
      getJSON: jest.fn().mockImplementation((url, cb) => setTimeout(() => cb([]), 0)),
      load: jest.fn(),
      ready: jest.fn((fn) => fn && fn()),
      click: jest.fn(function () {
        elements.forEach((el) => el.click())
        return this
      }),
    }
  }

  beforeAll(() => {
    // 不 mock location（让代码自由更新 window.location，jsdom 支持读取变更后的值）
    // 设置初始空 query（模拟干净状态）
    window.location.search = ''

    // 设置页面 DOM
    document.documentElement.innerHTML = indexHtml

    // 加载所有脚本
    scriptCodes.forEach((code) => {
      const script = document.createElement('script')
      script.textContent = code
      document.body.appendChild(script)
    })

    // 模拟异步 jsonover（如有）
    if (typeof jsonover === 'function') {
      jsonover()
      jsonover()
    }
  })

  test('多次点击检索按钮，o 参数不重复增长（应基于当前选中重新构建，而非追加）', () => {
    const button = document.querySelector('.go')
    if (!button) {
      throw new Error('未找到 .go 检索按钮，请确认页面中按钮的 class 或调整 selector')
    }

    // 手动模拟选中几个装备（取前 3 个 checkbox，确保 o 非空）
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'))
    if (checkboxes.length < 2) {
      throw new Error('页面中 checkbox 数量不足，无法模拟选中')
    }
    const selectedCheckboxes = checkboxes.slice(0, 3)
    selectedCheckboxes.forEach((cb) => {
      cb.checked = true
    })

    // 预期 o 值（值按字符串排序，防止顺序差异）
    const expectedIds = selectedCheckboxes
      .map((cb) => cb.value)
      .filter((v) => v)
      .sort()
      .join(',')

    if (!expectedIds) {
      throw new Error('选中的 checkbox 无 value，无法测试 o 参数')
    }

    // 第一次点击
    button.dispatchEvent(new Event('click', { bubbles: true }))

    // 读取更新后的 o 参数（无论是否跳转到 result.html 或使用 history，location 都会更新）
    const firstParams = new URLSearchParams(window.location.search)
    const firstO = firstParams.get('o') || ''
    const firstSortedO = firstO
      .split(',')
      .filter((v) => v)
      .sort()
      .join(',')

    // 可选：验证第一次构建正确
    expect(firstSortedO).toBe(expectedIds)

    // 第二次点击（相同选中状态）
    button.dispatchEvent(new Event('click', { bubbles: true }))

    const secondParams = new URLSearchParams(window.location.search)
    const secondO = secondParams.get('o') || ''
    const secondSortedO = secondO
      .split(',')
      .filter((v) => v)
      .sort()
      .join(',')

    // 关键期望：修复后 o 参数完全相同（无重复/增长）
    expect(secondSortedO).toBe(firstSortedO)
    expect(secondSortedO).toBe(expectedIds)

    // e 参数正常（若存在，应相同或按规则）
    const firstE = firstParams.get('e') || ''
    const secondE = secondParams.get('e') || ''
    expect(secondE).toBe(firstE)
  })
})
