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
  let originalLocation

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
                const match = e.target.matches(childSelector) || e.target.closest(childSelector)
                if (match) handler.call(e.target, e)
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
    // 保存原始 location
    originalLocation = window.location

    // 删除并替换为完整 mock（jsdom 测试环境中通常允许 delete）
    delete window.location

    const navigate = (url) => {
      const fullUrl = new URL(url || '', currentHref).href
      currentHref = fullUrl
      capturedUrls.push(fullUrl)
    }

    window.location = {
      ...originalLocation, // 保留其他原始属性（如 origin, protocol 等）
      assign: jest.fn(navigate),
      replace: jest.fn(navigate),
      reload: jest.fn(),
      toString: () => currentHref,
      href: currentHref,
      get search() {
        return new URL(currentHref).search
      },
      set search(val) {
        const u = new URL(currentHref)
        u.search = val
        currentHref = u.href
        capturedUrls.push(currentHref)
      },
      get origin() {
        return 'https://moe-data.github.io'
      },
      get pathname() {
        return '/index.html'
      },
      get hash() {
        return ''
      },
    }

    // 额外覆盖 href setter（直接赋值时捕获）
    Object.defineProperty(window.location, 'href', {
      get: () => currentHref,
      set: navigate,
      configurable: true,
    })

    // mock history（许多代码使用 replaceState 更新 query）
    window.history.pushState = jest.fn((state, title, url) => {
      if (url) navigate(url)
    })
    window.history.replaceState = jest.fn((state, title, url) => {
      if (url) navigate(url)
    })

    // 设置页面 DOM
    document.documentElement.innerHTML = indexHtml

    // 加载所有脚本
    scriptCodes.forEach((code) => {
      const script = document.createElement('script')
      script.textContent = code
      document.body.appendChild(script)
    })

    // 模拟异步 jsonover
    if (typeof jsonover === 'function') {
      jsonover()
      jsonover()
    }
  })

  afterAll(() => {
    // 恢复原始 location（可选，防止影响其他测试）
    window.location = originalLocation
  })

  test('多次点击检索按钮，o 参数不重复增长（应初始化/替换而非追加）', () => {
    const button = document.querySelector('.go')
    if (!button) {
      throw new Error('未找到 .go 检索按钮，请确认页面结构')
    }

    // 模拟初始带有 o 参数的页面（加载选中状态）
    window.location.search = '?o=100,101' // 触发 setter 捕获（可选）
    capturedUrls = []

    // 可选：手动模拟选中装备（若点击逻辑依赖当前 checked）
    // document.querySelectorAll('input[type="checkbox"][value="100"]').forEach(el => el.checked = true);
    // document.querySelectorAll('input[type="checkbox"][value="101"]').forEach(el => el.checked = true);

    // 第一次点击
    button.dispatchEvent(new Event('click', { bubbles: true }))

    // 期望至少有一次 URL 更新
    expect(capturedUrls.length).toBeGreaterThanOrEqual(1)
    const firstUrl = new URL(capturedUrls[capturedUrls.length - 1] || currentHref)
    const firstO = firstUrl.searchParams.get('o') || ''

    // 重置捕获
    capturedUrls = []

    // 第二次点击（相同选中状态）
    button.dispatchEvent(new Event('click', { bubbles: true }))

    expect(capturedUrls.length).toBeGreaterThanOrEqual(1)
    const secondUrl = new URL(capturedUrls[capturedUrls.length - 1] || currentHref)
    const secondO = secondUrl.searchParams.get('o') || ''

    // 关键：修复后 o 参数完全相同（无增长/重复）
    expect(secondO).toBe(firstO)
    if (firstO) {
      const firstItems = firstO.split(',').sort()
      const secondItems = secondO.split(',').sort()
      expect(secondItems).toEqual(firstItems)
    }

    // e 参数检查（若存在）
    const firstE = firstUrl.searchParams.get('e') || ''
    const secondE = secondUrl.searchParams.get('e') || ''
    expect(secondE).toBe(firstE)
  })
})
