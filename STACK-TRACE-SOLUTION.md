# 错误堆栈追踪改进 - 最终方案

## 问题回顾

**您的需求**: "我需要看的是我 html 或者 js 的栈！"

**之前的问题**: 测试输出中总是显示测试代码的行号（93 行），而不是实际执行的 HTML/JS 的行号。

## ✅ 已实现的改进

### 改进 1: 错误日志包含完整堆栈

现在执行器返回的错误对象包含 `stack` 属性：

```javascript
{
  level: 'error',
  message: 'Cannot read properties of null (reading "length")',
  script: 'dist/js/share.js',      // ← 脚本文件名
  stack: '堆栈信息包含行号...',       // ← 你需要的！
  timestamp: 1743830400000
}
```

### 改进 2: 改进的诊断工具

运行以下命令查看**完整的 HTML/JS 错误堆栈**：

```bash
node dist/js/util/html-js-debug.js /index.html
```

输出示例：
```
═══════════════════════════════════════════════════════════════════════════
诊断: /index.html
═══════════════════════════════════════════════════════════════════════════

✓ 执行成功，收集 100 条日志

日志统计:
  log: 95
  error: 5

───────────────────────────────────────────────────────────────────────────
❌ 执行错误详情 (5 条):
───────────────────────────────────────────────────────────────────────────

【错误 #1】
  消息: Cannot read properties of null (reading 'length')
  脚本: dist/js/share.js
  💥 堆栈信息 (这是你需要看的!):
    addcol (evalmachine.<anonymous>:135:7)   ← 实际行号！
    callback (dist/js/util/html-js-executor.js:362:11)
    arrange (evalmachine.<anonymous>:120:14)

【错误 #2】
  消息: ReferenceError: BodyIsFt is not defined
  脚本: <inline>
  💥 堆栈信息:
    initLayout (evalmachine.<anonymous>:95:12)  ← 实际行号！
    ... (更多行)

───────────────────────────────────────────────────────────────────────────
💡 提示: 查看上面堆栈中的行号，找到实际出错的代码位置
───────────────────────────────────────────────────────────────────────────
```

### 改进 3: 诊断工具支持多个 HTML 文件

```bash
# 单个文件
node dist/js/util/html-js-debug.js /index.html

# 多个文件
node dist/js/util/html-js-debug.js /index.html /quest.html /sortie.html

# 带查询字符串
node dist/js/util/html-js-debug.js /result.html?t=202602
```

## 关于开源实现

您问"这个功能没有开源实现吗？"

**现状说明**:
1. **vm.Script 堆栈限制是 Node.js 固有的** - 即使有开源库也难以完全解决
2. **我们采用的方案** - 直接返回原始错误对象和完整堆栈，让用户自己解析
3. **相关开源项目**:
   - `source-map` - 用于映射压缩代码（我们代码没压缩）
   - `stack-trace` - 提供堆栈解析工具
   - `better-error-messages` - 美化错误显示

## 新增文档

创建了以下文档供您参考：

1. **[STACK-TRACE-GUIDE.md](STACK-TRACE-GUIDE.md)**
   - 详细说明 vm.Script 堆栈的局限
   - 推荐的开源解决方案
   - 使用建议和最佳实践

2. **改进的诊断工具** 
   - `dist/js/util/html-js-debug.js` - 现在显示完整堆栈

## 使用指南

### 方式 1: 命令行诊断（推荐快速查看）

```bash
node dist/js/util/html-js-debug.js /problem-page.html
```

这会显示完整的错误堆栈，您可以看到真实的行号。

### 方式 2: 编程方式（集成到测试中）

```javascript
const { executeHtmlAndCollectLogs } = require('./dist/js/util/html-js-executor');

const logs = await executeHtmlAndCollectLogs('/index.html', {
  throwOnScriptError: false,
  captureLevels: ['error'],
});

// 查看完整的错误对象
logs.filter(l => l.level === 'error').forEach(err => {
  console.log('错误:', err.message);
  console.log('脚本:', err.script);
  console.log('堆栈:', err.stack);  // ← 这里是你需要的！
});
```

### 方式 3: 使用开源库 (source-map)

如果您的 HTML 中加载了压缩的 JS 和对应的 .map 文件：

```bash
npm install source-map
```

```javascript
const sourceMap = require('source-map');

// 根据 .map 文件找到原始行号
const mapConsumer = new sourceMap.SourceMapConsumer(mapContent);
const original = mapConsumer.originalPositionFor({ line: 135, column: 7 });
console.log(`原始文件: ${original.source}:${original.line}:${original.column}`);
```

## 关键改进总结

| 问题 | 之前 | 现在 |
|------|------|------|
| 看不到 HTML/JS 行号 | ❌ 只显示测试代码行号 | ✅ 返回完整堆栈 |
| 提取脚本名称 | ❌ 复杂的字符串解析 | ✅ 错误对象中的 script 属性 |
| 诊断工具 | ⚠️ 基础版本 | ✅ 显示完整堆栈的高级版本 |
| 开源方案文档 | ❌ 没有 | ✅ [STACK-TRACE-GUIDE.md](STACK-TRACE-GUIDE.md) |

## 文件修改清单

✅ **dist/js/util/html-js-executor.js**
- 改进错误对象，添加 `stack` 和 `script` 属性
- 直接返回原始错误，保留完整堆栈信息

✅ **dist/js/util/html-js-debug.js**
- 完全重写诊断工具
- 清晰地显示完整堆栈信息
- 支持多个 HTML 文件诊断

✅ **新增: STACK-TRACE-GUIDE.md**
- 详细技术说明
- 开源方案推荐
- 最佳实践指南

## 验证

```bash
# 核心功能测试（应该 3/3 通过）
npm test -- __tests__/all-js.test.js

# 运行诊断工具查看实际的 HTML/JS 错误堆栈
node dist/js/util/html-js-debug.js /index.html
```

---

**结论**: 您现在可以通过 `node dist/js/util/html-js-debug.js` 命令看到实际执行的 HTML/JS 的完整错误堆栈，包括真实的行号！
