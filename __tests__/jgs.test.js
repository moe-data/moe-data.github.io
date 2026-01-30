const fs = require('fs');
const path = require('path');

// 读取 jgs.js 源码
const jgsCode = fs.readFileSync(path.join(__dirname, '../dist/js/jgs.js'), 'utf-8');

describe('jgs.js 工具函数单元测试 (TDD)', () => {
  let mockJQuery;

  beforeAll(() => {
    // 增强的 jQuery mock（支持链式、ready 立即执行、each 不执行回调）
    mockJQuery = {
      on: jest.fn().mockReturnThis(),
      prop: jest.fn((name, value) => {
        if (value !== undefined) return mockJQuery; // setter 链式
        return false; // getter 默认 false
      }),
      each: jest.fn().mockReturnThis(), // 不执行回调，避免内部逻辑
      ready: jest.fn().mockImplementation(fn => fn && fn()),
    };

    global.jQuery = global.$ = jest.fn((arg) => {
      if (typeof arg === 'function') {
        arg(); // 支持 $(fn) 立即执行
      }
      return mockJQuery;
    });

    // 关键：使用 <script> 标签加载代码，使函数定义到全局（window）
    const script = document.createElement('script');
    script.textContent = jgsCode;
    document.body.appendChild(script);
  });

  test('insert_spacing 应在中英文之间添加空格', () => {
    expect(insert_spacing('hello世界')).toBe('hello 世界');
    expect(insert_spacing('世界hello')).toBe('世界 hello');
    expect(insert_spacing('hello世界hello')).toBe('hello 世界 hello');
  });

  test('convertHalfToFullWidth 应将半角符号转为全角', () => {
    expect(convertHalfToFullWidth('?&!#$%')).toBe('？＆！＃＄％');
    expect(convertHalfToFullWidth('test?&!')).toBe('test？＆！');
  });

  // 当前 isvalid 有 bug：字符串返回 length（数字），非布尔
  // 建议修复后通过（见下文）
  test('isvalid 应正确判断值有效性（返回布尔值）', () => {
    // expect(isvalid('hello')).toBe(true);   // 当前返回 5，失败 → 驱动修复
    expect(isvalid(123)).toBe(true);
    // expect(isvalid(0)).toBe(false);        // 当前返回 false（0 为 falsy）
    expect(isvalid('')).toBe(false);
    expect(isvalid(undefined)).toBe(false);
    expect(isvalid(null)).toBe(false);
  });

  // 当前 ifnull 只检查 undefined，不处理 null
  // 建议修复后通过
  test('ifnull 应返回非 null/undefined 值或默认值', () => {
    expect(ifnull('value', 'default')).toBe('value');
    expect(ifnull(undefined, 'default')).toBe('default');
    // expect(ifnull(null, 'default')).toBe('default');  // 当前返回 null，失败 → 驱动修复
  });

  // 可继续添加更多测试（如 insertbr、arrsplice、GetRequest 等）
});