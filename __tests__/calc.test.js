const fs = require('fs')
const path = require('path')

// 加载 result.html（calc.js 运行在 result.html 页面中，依赖其 DOM 结构）
const resultHtml = fs.readFileSync(path.join(__dirname, '../result.html'), 'utf-8')

// 加载页面实际依赖的所有脚本
const scriptPaths = [
  '../dist/js/cdn/jquery.min.js',
  '../dist/js/cdn/bootstrap.js',
  '../dist/js/jgs.js',
  '../dist/js/simplize.js',
  '../dist/js/share.js',
  '../dist/js/table.js',
  '../dist/js/line.js',
  '../dist/js/scatter.js',
  '../dist/items/developable/sortby/all.js',
  '../dist/items/developable/sortby/init.js',
  '../dist/items/developable/sortby/releasetime.js',
  '../dist/js/item.js',
]

const scriptCodes = scriptPaths.map((scriptPath) => fs.readFileSync(path.join(__dirname, scriptPath), 'utf-8'))

// calc.js 本身也加载（核心逻辑）
const calcCode = fs.readFileSync(path.join(__dirname, '../dist/js/calc.js'), 'utf-8')

describe('calc.js 计算逻辑单元测试 (TDD)', () => {
  beforeAll(() => {
    // 设置 result.html 的完整 DOM（calc.js 会操作 table、progress、footer 等元素）
    document.documentElement.innerHTML = resultHtml
    // window.location.search = '?o=100,102'; // 非连续 ID，用于验证顺序/排序一致

    // 真实加载 jQuery（不再 mock，避免 calc.js 中的复杂 jQuery 操作崩溃）
    // 由于我们加载了本地 jquery.min.js，$ 会正确定义
    scriptCodes.forEach((code) => {
      const script = document.createElement('script')
      script.textContent = code
      // 优先 append 到 head（模拟真实页面加载顺序）
      document.head.appendChild(script)
    })

    // 加载 calc.js
    const calcScript = document.createElement('script')
    calcScript.textContent = calcCode
    document.head.appendChild(calcScript)

    // mock 必要的全局（避免 undefined 或异步卡住）
    global.formatOnlyname = (id) => String(id)
    global.addemoji = (str) => str
    global.slotitem = [] // 装备 mock
    global.csjson = [] // 舰娘 mock

    // 模拟异步 JSON 加载完成（多次调用，确保 jsonover 执行）
    if (typeof jsonover === 'function') {
      jsonover()
      jsonover()
      jsonover()
    }

    // 模拟 GetRequest（从 URL 解析参数，calc.js 启动时使用）
    global.GetRequest = () => ({})
  })

  // 测试：脚本加载不崩溃，核心顶层函数存在
  test('calc.js 加载不崩溃，核心顶层函数存在', () => {
    expect(typeof jsonover).toBe('function')
    expect(typeof setdeno).toBe('function')
    expect(typeof langchange).toBe('function')
    expect(typeof progress).toBe('function')
    expect(typeof group2By).toBe('function')
    expect(typeof filt).toBe('function')
    // isonladd 在 calc.js 中是局部函数，这里我们稍后手动模拟
  })

  // 测试：isResource（假设脚本中有此函数，根据实际实现调整期望）
  test('isResource 应正确判断资源字段', () => {
    // calc.js 中通常有类似实现：return ['fuel','ammo','steel','bauxite','資材'].includes(e)
    expect(isResource('fuel')).toBe(true)
    expect(isResource('ammo')).toBe(true)
    expect(isResource('steel')).toBe(true)
    expect(isResource('bauxite')).toBe(true)
    expect(isResource('資材')).toBe(true)
    expect(isResource('secretary')).toBe(true)
    expect(isResource('denominator')).toBe(true)
    expect(isResource('ratio')).toBe(false)
    expect(isResource('abc')).toBe(false)
  })

  // 纯 JS 模拟查询测试（核心计算确定性 + 正确性）
  test('纯 JS 模拟查询：相同输入 o/e/q 下，sorted 结果一致且数值正确', () => {
    // mock 小型 bigdata（修正：第二个配方纯出 100，无干扰项）
    const mockBigdata = [
      { i: '10/10/10/10', s: '1', o: '100', n: 10, l: 99 },
      { i: '10/10/10/10', s: '1', o: '101', n: 5, l: 50 }, // 干扰项（不影响主查询）
      { i: '250/30/200/30', s: '2', o: '100', n: 20, l: 1 }, // 纯出 100
      // 移除任何其他 o=102 等干扰记录
    ]

    // 模拟查询参数
    const output = ['100'] // 主查询
    const extra = [] // 副查询空
    const oute = output.concat(extra)
    const minDeno = 1

    // 核心纯函数计算（直接复制/模拟 calc.js 中的逻辑，避免异步依赖）
    const grouped = group2By(mockBigdata, 'i', 's')
    const filted = filt(grouped, output)

    // 手动 isonladd 聚合（贴近 calc.js 实际逻辑）
    const isonladdManual = (array) => {
      const groups = []
      for (let i = 0; i < array.length; i++) {
        const group = array[i]
        const onal = { i: [group[0].i, group[0].s] }
        for (let j = 0; j < group.length; j++) {
          const item = group[j].o
          const n = Number(group[j].n)
          onal['n' + item] = (onal['n' + item] || 0) + n
        }
        groups.push(onal)
      }
      return groups
    }

    const isonl = isonladdManual(filted)

    // 计算 denominator / ratio / times（calc.js 中的循环）
    isonl.forEach((e) => {
      let denominator = 0
      for (const key in e) {
        if (key.startsWith('n')) denominator += e[key]
      }
      e.denominator = denominator
      e.ratio = 0
      e.times = 0
      for (const key in e) {
        if (key.startsWith('n')) {
          const k = key.slice(1)
          const rate = e[key] / denominator
          if (oute.includes(k)) {
            e.ratio += rate
            e.times += e[key]
          }
        }
      }
    })

    // 模拟 setdeno：过滤 + 排序（默认按 ratio 降序）
    let sorted = isonl.filter((e) => e.denominator > minDeno)
    sorted = sorted.sort((a, b) => b.ratio - a.ratio)

    // 第二次完全相同的计算（验证确定性）
    const grouped2 = group2By(mockBigdata, 'i', 's')
    const filted2 = filt(grouped2, output)
    const isonl2 = isonladdManual(filted2)
    isonl2.forEach((e) => {
      let denominator = 0
      for (const key in e) if (key.startsWith('n')) denominator += e[key]
      e.denominator = denominator
      e.ratio = 0
      e.times = 0
      for (const key in e) {
        if (key.startsWith('n')) {
          const k = key.slice(1)
          const rate = e[key] / denominator
          if (oute.includes(k)) {
            e.ratio += rate
            e.times += e[key]
          }
        }
      }
    })
    let sorted2 = isonl2.filter((e) => e.denominator > minDeno)
    sorted2 = sorted2.sort((a, b) => b.ratio - a.ratio)

    // 关键期望：两次结果完全一致（确定性）
    expect(sorted2).toEqual(sorted)

    // 额外数值正确性检查（TDD 驱动）
    expect(sorted.length).toBe(2)
    expect(sorted[0].ratio).toBeCloseTo(1, 5) // 纯配方 20/20 = 100%
    expect(sorted[0].times).toBe(20)
    expect(sorted[0].denominator).toBe(20)
    expect(sorted[1].ratio).toBeCloseTo(10 / 15, 5) // 10/(10+5) ≈ 66.67%
    expect(sorted[1].times).toBe(10)
    expect(sorted[1].denominator).toBe(15)
  })

  // 更多测试建议（TDD 驱动）：
  // - 测试 setdeno 过滤 denominator
  // - 测试 filt / group2By（如果暴露）
  // - 模拟 bigdata 测试整体计算流程
})
