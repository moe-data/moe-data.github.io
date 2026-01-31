const fs = require('fs')
const path = require('path')

const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8')

// 加载页面实际依赖的所有脚本
const scriptPaths = [
  '../dist/js/cdn/jquery.min.js',
  '../dist/js/jgs.js',
  '../dist/js/simplize.js',
  '../dist/js/share.js',
  '../dist/js/table.js',
  '../dist/js/scatter.js',
  '../dist/js/item.js',
]

const scriptCodes = scriptPaths.map((scriptPath) => fs.readFileSync(path.join(__dirname, scriptPath), 'utf-8'))

describe('查询按钮点击 - o 参数不重复增长 (TDD)', () => {
  let mockJQuery
  let capturedUrls = []

  beforeAll(() => {
    // 设置页面 DOM
    document.documentElement.innerHTML = indexHtml

    // 增强 jQuery mock（覆盖 calc.js 中常用方法，避免崩溃）
    mockJQuery = {
      on: jest.fn().mockReturnThis(),
      prop: jest.fn().mockReturnThis(),
      each: jest.fn().mockReturnThis(),
      ready: jest.fn().mockImplementation((fn) => fn && fn()),
      css: jest.fn().mockReturnThis(),
      hide: jest.fn().mockReturnThis(),
      show: jest.fn().mockReturnThis(),
      val: jest.fn(() => ''), // 可根据需要模拟输入值
      change: jest.fn().mockReturnThis(),
      bind: jest.fn().mockReturnThis(),
      getJSON: jest.fn().mockImplementation((url, callback) => setTimeout(() => callback([]), 0)),
      load: jest.fn(),
    }

    global.jQuery = global.$ = jest.fn((arg) => {
      if (typeof arg === 'function') arg()
      return mockJQuery
    })

    // 捕获 URL 更新（覆盖 location.href/assign/replace 和 history）
    capturedUrls = []
    const pushUrl = (val) => {
      let fullUrl = val
      if (!val.startsWith('http')) {
        fullUrl = window.location.origin + val
      }
      capturedUrls.push(fullUrl)
    }

    window.location.assign = jest.fn(pushUrl)
    window.location.replace = jest.fn(pushUrl)
    Object.defineProperty(window.location, 'href', {
      set: pushUrl,
      configurable: true,
    })
    window.history.pushState = jest.fn((_, __, url) => pushUrl(url || window.location.href))
    window.history.replaceState = jest.fn((_, __, url) => pushUrl(url || window.location.href))

    // 加载脚本（模拟浏览器执行 <script>）
    const jgsScript = document.createElement('script')
    jgsScript.textContent = jgsCode
    document.body.appendChild(jgsScript)

    const calcScript = document.createElement('script')
    calcScript.textContent = calcCode
    document.body.appendChild(calcScript)

    // 如有 jsonover，模拟调用（calc.js 异步完成）
    if (typeof jsonover === 'function') {
      jsonover()
      jsonover()
    }
  })

  test('多次点击检索按钮，o 参数不重复增长（应替换而非追加）', () => {
    // 查找“检索”按钮（根据页面实际调整 selector）
    const button =
      document.querySelector('input[value="检索"]') ||
      document.querySelector('button[contains(text(),"检索")]') ||
      document.querySelector('#searchBtn, #queryBtn, .search-button') // 常见备选

    if (!button) {
      throw new Error('未找到检索按钮，请根据 index.html 实际结构调整 selector')
    }

    // 清空初始 URL 参数
    Object.defineProperty(window.location, 'search', { value: '', configurable: true })

    // 清空捕获
    capturedUrls = []

    // 第一次点击（假设当前输入/选择会导致某个 o 值，例如 o=100）
    button.click()

    // 应有 URL 更新
    expect(capturedUrls.length).toBeGreaterThan(0)
    const firstUrl = new URL(capturedUrls[capturedUrls.length - 1], window.location.origin)
    const firstO = firstUrl.searchParams.get('o') || ''
    expect(firstO).not.toBe('') // 应有 o 参数（如果默认无，可调整期望）

    // 模拟“reload”：设置当前 search 为第一次的结果
    Object.defineProperty(window.location, 'search', { value: firstUrl.search, configurable: true })

    // 清空捕获，准备第二次点击
    capturedUrls = []

    // 第二次点击（输入不变，固定版本应保持 o 不变/替换为相同值）
    button.click()

    expect(capturedUrls.length).toBeGreaterThan(0)
    const secondUrl = new URL(capturedUrls[capturedUrls.length - 1], window.location.origin)
    const secondO = secondUrl.searchParams.get('o') || ''

    // 关键期望：修复后 o 不增长（字符串相同，不出现重复如 "100,100" 或长度翻倍）
    expect(secondO).toBe(firstO) // 替换：相同
    expect(secondO.split(',').length).toBe(firstO.split(',').length) // 长度不变
    expect(secondO).not.toMatch(/(\w+),\1/) // 无明显重复项（可选增强）

    // e 参数正常（不增长，可选检查）
    const firstE = firstUrl.searchParams.get('e') || ''
    const secondbd = secondUrl.searchParams.get('e') || ''
    expect(secondE).toBe(firstE) // 假设 e 始终替换
  })
})
