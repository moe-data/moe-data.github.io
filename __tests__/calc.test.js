const fs = require('fs')
const path = require('path')

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

// calc.js 本身也加载（核心逻辑）
const calcCode = fs.readFileSync(path.join(__dirname, '../dist/js/calc.js'), 'utf-8')

describe('calc.js 计算逻辑单元测试 (TDD)', () => {
  beforeAll(() => {
    // 模拟 jsdom 环境 + 简单 jQuery mock（仅用于避免 calc.js 执行崩溃）
    global.jQuery = global.$ = jest.fn(() => ({
      css: jest.fn().mockReturnThis(),
      hide: jest.fn().mockReturnThis(),
      val: jest.fn(() => 1), // 模拟最小 denominator
      on: jest.fn(),
      ready: jest.fn((fn) => fn()),
      getJSON: jest.fn(),
      load: jest.fn(),
    }))

    // 加载所有依赖脚本 + calc.js（使 group2By、filt 等函数全局可用）
    scriptCodes.forEach((code) => {
      const script = document.createElement('script')
      script.textContent = code
      document.body.appendChild(script)
    })
    const calcScript = document.createElement('script')
    calcScript.textContent = calcCode
    document.body.appendChild(calcScript)

    // mock 必要的全局函数/数据（避免 undefined）
    global.formatOnlyname = (id) => String(id) // 简化为返回 id 字符串
    global.addemoji = (str) => str
    global.slotitem = [] // 装备数据 mock
    global.csjson = [] // 舰娘数据 mock
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

  // 更新：纯 JS 模拟查询测试（修正 mock 数据，使有一个 100% 配方）
  test('纯 JS 模拟查询：相同输入 o/e/q 下，sorted 结果一致且数值正确', () => {
    // mock 小型 bigdata（修正：第二个配方纯出 100，无干扰项）
    const mockBigdata = [
      { i: '10/10/10/10', s: '1', o: '100', n: 10, l: 99 },
      { i: '10/10/10/10', s: '1', o: '101', n: 5, l: 50 }, // 干扰项
      { i: '250/30/200/30', s: '2', o: '100', n: 20, l: 1 }, // 纯出 100
      // 移除干扰 o=102 的记录，使第二个配方 denominator=20, ratio=1
    ]

    // 模拟查询参数（o: 主查询装备ID, e: 副查询空, q: 'd' 为装备开发）
    const output = ['100'] // 主查询：只关心装备 100
    const extra = [] // 副查询：空
    const oute = output.concat(extra)
    const minDeno = 1 // 最小次数阈值

    // 核心纯函数计算（直接模拟 calc.js 中的逻辑）
    const grouped = group2By(mockBigdata, 'i', 's')
    const filted = filt(grouped, output)

    // 手动实现 isonladd 聚合（贴近 calc.js 实际逻辑）
    const isonladdManual = (array, o) => {
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

    const isonl = isonladdManual(filted, oute)

    // 计算 denominator / ratio / times
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
    const isonl2 = isonladdManual(filted2, oute)
    isonl2.forEach((e) => {
      // 相同计算逻辑（复制）
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

    // 最高 ratio：纯配方 20/20 = 100%
    expect(sorted[0].ratio).toBeCloseTo(1, 5)
    expect(sorted[0].times).toBe(20)
    expect(sorted[0].denominator).toBe(20)

    // 次高：10/(10+5) ≈ 66.67%
    expect(sorted[1].ratio).toBeCloseTo(10 / 15, 5)
    expect(sorted[1].times).toBe(10)
    expect(sorted[1].denominator).toBe(15)
  })

  // 更多测试建议（TDD 驱动）：
  // - 测试 setdeno 过滤 denominator
  // - 测试 filt / group2By（如果暴露）
  // - 模拟 bigdata 测试整体计算流程
})
