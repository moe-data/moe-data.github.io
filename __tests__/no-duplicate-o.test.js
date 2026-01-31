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
  '../dist/js/calc.js',
]

const scriptCodes = scriptPaths.map((scriptPath) => fs.readFileSync(path.join(__dirname, scriptPath), 'utf-8'))

describe('查询按钮点击 - o 参数不重复增长 (TDD)', () => {
  let capturedUrls = []
  let currentHref = 'https://moe-data.github.io/index.html'

  // 完整 mock location 对象（避免重定义不可配置的 href）
  const mockLocation = {
    assign: jest.fn((url) => {
      const fullUrl = new URL(url, currentHref).href
      currentHref = fullUrl
      capturedUrls.push(fullUrl)
    }),
    replace: jest.fn((url) => {
      const fullUrl = new URL(url, currentHref).href
      currentHref = fullUrl
      capturedUrls.push(fullUrl)
    }),
    reload: jest.fn(),
    ancestorOrigins: {},
    hash: '',
    host: 'moe-data.github.io',
    hostname: 'moe-data.github.io',
    href: currentHref,
    origin: 'https://moe-data.github.io',
    pathname: '/index.html',
    port: '',
    protocol: 'https:',
    search: '',
    toString: () => currentHref,
  }

  // jQuery mock：支持真实事件绑定（direct + delegated）
  global.jQuery = global.$ = function (selector) {
    if (typeof selector === 'function') {
      selector()
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
                if (e.target.matches(childSelector) || e.target.closest(childSelector)) {
                  handler.call(e.target, e)
                }
              }
            : handler
          el.addEventListener(event, finalHandler)
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
    }
  }

  beforeAll(() => {
    // 完全替换 window.location 为 mock（jsdom 允许）
    Object.defineProperty(window, 'location', {
      value: mockLocation,
      writable: true,
      configurable: true,
    })

    // mock history（防止 pushState/replaceState 使用真实 location）
    window.history.pushState = jest.fn((state, title, url) => {
      if (url) {
        const fullUrl = new URL(url, currentHref).href
        currentHref = fullUrl
        capturedUrls.push(fullUrl)
      }
    })
    window.history.replaceState = jest.fn((state, title, url) => {
      if (url) {
        const fullUrl = new URL(url, currentHref).href
        currentHref = fullUrl
        capturedUrls.push(fullUrl)
      }
    })

    // 设置页面 DOM
    document.documentElement.innerHTML = indexHtml

    // 加载所有脚本（模拟浏览器 <script> 执行）
    scriptCodes.forEach((code) => {
      const script = document.createElement('script')
      script.textContent = code
      document.body.appendChild(script)
    })

    // 模拟异步完成（如 jsonover）
    if (typeof jsonover === 'function') {
      jsonover()
      jsonover()
    }
  })

  test('多次点击检索按钮，o 参数不重复增长（应初始化/替换而非追加）', () => {
    const button = document.querySelector('.go')
    if (!button) {
      throw new Error('未找到 .go 检索按钮，请确认页面 HTML 结构')
    }

    // 模拟初始状态：页面带有 o 参数（从 URL 加载选中）
    mockLocation.search = '?o=100,101' // 假设初始两个选中装备
    capturedUrls = []

    // 可选：手动模拟选中（若点击逻辑依赖当前 checked 状态）
    // 示例：找到装备 checkbox 并选中（根据实际 name/value 调整）
    // document.querySelectorAll('input[type="checkbox"][name="item"][value="100"]').forEach(cb => cb.checked = true);
    // document.querySelectorAll('input[type="checkbox"][name="item"][value="101"]').forEach(cb => cb.checked = true);

    // 第一次点击
    button.dispatchEvent(new Event('click', { bubbles: true }))

    expect(capturedUrls.length).toBeGreaterThanOrEqual(1)
    const firstUrl = new URL(capturedUrls[capturedUrls.length - 1] || currentHref)
    const firstO = firstUrl.searchParams.get('o') || ''

    // 重置捕获，准备第二次点击
    capturedUrls = []

    // 第二次点击（输入不变，修复后 o 应保持相同）
    button.dispatchEvent(new Event('click', { bubbles: true }))

    expect(capturedUrls.length).toBeGreaterThanOrEqual(1)
    const secondUrl = new URL(capturedUrls[capturedUrls.length - 1] || currentHref)
    const secondO = secondUrl.searchParams.get('o') || ''

    // 关键期望：修复后 o 参数不增长（值相同，无重复）
    expect(secondO).toBe(firstO)
    if (firstO) {
      const firstItems = firstO.split(',').sort()
      const secondItems = secondO.split(',').sort()
      expect(secondItems).toEqual(firstItems) // 项相同、无重复
      expect(secondO).not.toMatch(/(\d+).*\1.*\1/) // 无明显重复项
    }

    // e 参数正常检查（若存在）
    const firstE = firstUrl.searchParams.get('e') || ''
    const secondE = secondUrl.searchParams.get('e') || ''
    expect(secondE).toBe(firstE)
  })
})
