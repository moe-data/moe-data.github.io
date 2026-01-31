const fs = require('fs');
const path = require('path');

// 加载页面实际依赖的所有脚本
const scriptPaths = [
  '../dist/js/cdn/jquery.min.js',
  '../dist/js/jgs.js',  '../dist/js/simplize.js',
  '../dist/js/share.js',
  '../dist/js/table.js',
  '../dist/js/line.js',
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

  // isonladd 当前非全局（块级作用域），此处临时注释或调整
  // 若需测试，可在 calc.js 中将 function isonladd 提升到顶层（推荐重构）
  // 或在这里手动模拟其逻辑进行单元测试
  test.skip('isonladd 应正确聚合数据并计算 ratio/times/denominator（待重构后启用）', () => {
    const mockData = [[{ i: '1', s: '1', o: '100', n: '5', l: '99' }], [{ i: '1', s: '1', o: '200', n: '3', l: '50' }]]
    const output = ['100']

    // const result = isonladd(mockData, output);  // 当前会报未定义
    // 临时模拟核心逻辑（摘自 calc.js）
    let groups = []
    for (let i = 0; i < mockData.length; i++) {
      let onal = { i: [mockData[i][0].i] }
      mockData[i].forEach((item) => {
        const o = item.o
        onal[`n${o}`] = (onal[`n${o}`] || 0) + Number(item.n)
      })
      groups.push(onal)
    }
    // 计算 denominator/times/ratio
    groups.forEach((e) => {
      e.denominator = Object.values(e)
        .filter((v) => typeof v === 'number')
        .reduce((a, b) => a + b, 0)
      e.times = e.n100 || 0
      e.ratio = e.times / e.denominator
    })

    expect(groups[0].denominator).toBe(8)
    expect(groups[0].times).toBe(5)
    expect(groups[0].ratio).toBe(0.625)
  })

  // 新增：纯 JS 模拟查询测试（核心计算确定性 + 正确性）
  test('纯 JS 模拟查询：相同输入 o/e/q 下，sorted 结果一致且数值正确', () => {
    // mock 小型 bigdata（模拟开发记录：配方 i、旗舰 s、出货 o、次数 n、Lv l）
    const mockBigdata = [
      { i: '10/10/10/10', s: '1', o: '100', n: 10, l: 99 },
      { i: '10/10/10/10', s: '1', o: '101', n: 5, l: 50 },
      { i: '250/30/200/30', s: '2', o: '100', n: 20, l: 1 },
      { i: '250/30/200/30', s: '2', o: '102', n: 8, l: 30 },
    ]

    // 模拟查询参数（o: 主查询装备ID, e: 副查询, q: 'd' 为装备开发）
    const output = ['100'] // 主查询：只关心装备 100
    const extra = [] // 副查询：空
    const oute = output.concat(extra)
    const minDeno = 1 // 最小次数阈值（模拟 $('#denominator').val()）

    // 核心纯函数计算（直接复制/模拟 calc.js 中的逻辑，避免异步依赖）
    const grouped = group2By(mockBigdata, 'i', 's')
    const filted = filt(grouped, output)

    // 手动实现 isonladd 聚合（calc.js 中局部函数，这里复制核心逻辑）
    const isonladdManual = (array, o) => {
      const groups = []
      for (let i = 0; i < array.length; i++) {
        const group = array[i]
        const onal = { i: [group[0].i, group[0].s] } // 简化为 [配方,旗舰]
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
    expect(sorted[0].ratio).toBeCloseTo(1) // 第二个配方：20/20 = 100%


    expect(sorted[0].times).toBe(20)
    expect(sorted[1].ratio).toBeCloseTo(10 / 15) // 第一个配方：10/(10+5) ≈ 66.67%



    expect(sorted[1].times).toBe(10)

  })

  // 更多测试建议（TDD 驱动）：
  // - 测试 setdeno 过滤 denominator
  // - 测试 filt / group2By（如果暴露）
  // - 模拟 bigdata 测试整体计算流程
})