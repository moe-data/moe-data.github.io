# 关于错误堆栈行号映射的技术说明

## 问题描述

当 Node.js 的 `vm.Script` 执行代码时，错误堆栈显示的是 `evalmachine.<anonymous>` 而不是原始文件名和行号。这导致无法直接看到执行时发生错误的真实位置。

## 根本原因

vm.Script 的堆栈信息限制：
```javascript
// 当执行这段代码：
const script = new vm.Script(htmlContent, { filename: 'dist/js/jgs.js' });
script.runInContext(context);

// 错误堆栈显示：
// Error: Cannot read properties of null (reading 'length')
//     at addcol (evalmachine.<anonymous>:100:7)
//     at Object.<anonymous> (evalmachine.<anonymous>:44:9)
//
// 而不是：
// Error: Cannot read properties of null (reading 'length')
//     at addcol (dist/js/jgs.js:100:7)
```

## 开源解决方案

### 1. **source-map** (推荐用于压缩代码)
```bash
npm install source-map
```

使用场景：当代码已被压缩且有 .map 文件时

```javascript
const sourceMap = require('source-map');
const fs = require('fs');

function mapSourcePosition(filename, line, column) {
  try {
    const mapContent = fs.readFileSync(`${filename}.map`, 'utf8');
    const consumer = new sourceMap.SourceMapConsumer(mapContent);
    const pos = consumer.originalPositionFor({ line, column });
    return pos;
  } catch (e) {
    return { line, column, source: filename };
  }
}
```

### 2. **prepend-stack-traces** 
适合为堆栈添加前缀信息

### 3. **stack-trace** 库
```bash
npm install stack-trace
```

提取和分析堆栈信息：
```javascript
const stackTrace = require('stack-trace');

try {
  vmScript.runInContext(context);
} catch (error) {
  const trace = stackTrace.parse(error);
  trace.forEach(frame => {
    console.log(`${frame.getFunctionName()} @ ${frame.getFileName()}:${frame.getLineNumber()}`);
  });
}
```

### 4. **better-error-messages**
为错误添加上下文和源代码行

## 当前实现的改进

我们已经改进了错误捕获，现在返回：

```javascript
{
  level: 'error',
  message: 'Cannot read properties of null (reading "length")',
  script: 'dist/js/jgs.js',           // 脚本来源
  stack: 'full stack trace here...',  // 完整堆栈！
  timestamp: 1743830400000
}
```

现在您可以看到完整堆栈，从中找到真实的出错行号。

## 推荐用法

### 方法 1: 查看完整错误堆栈
```javascript
const logs = await executeHtmlAndCollectLogs('/index.html', {
  throwOnScriptError: false,
  captureLevels: ['error'],
  waitForMs: 200,
});

logs.filter(l => l.level === 'error').forEach(err => {
  console.error(`错误: ${err.message}`);
  console.error(`脚本: ${err.script}`);
  console.error(`堆栈:\n${err.stack}`);
});
```

### 方法 2: 使用 stack-trace 库深度分析
```javascript
const stackTrace = require('stack-trace');

try {
  await executeHtmlAndCollectLogs('/index.html', {
    throwOnScriptError: true,  // 让错误抛出
  });
} catch (error) {
  const trace = stackTrace.parse(error);
  console.error('详细堆栈分析:');
  trace.forEach((frame, i) => {
    console.error(`  ${i}: ${frame.getFunctionName()} 
      @ ${frame.getFileName()}:${frame.getLineNumber()}:${frame.getColumnNumber()}`);
  });
}
```

## VM 模块的限制

Node.js `vm` 模块的设计限制：

1. **文件名映射困难** - 即使指定 filename，堆栈仍显示 evalmachine
2. **列号信息不准确** - vm 执行的代码列号范围有限
3. **内联脚本的完全解决很难** - 无法自动关联到源 HTML

## 替代方案对比

| 方案 | 优点 | 缺点 | 成本 |
|------|------|------|------|
| **vm.Script (当前)** | 轻量，集成简单 | 堆栈信息不精确 | 无额外依赖 |
| **source-map** | 精确映射压缩代码 | 需要 .map 文件 | npm 包 |
| **stack-trace** | 易于堆栈分析 | 需要手动解析 | npm 包 |
| **Puppeteer** | 真实浏览器执行 | 很重，慢 | 浏览器实例 |
| **happy-dom** | 比 jsdom 轻 | 功能比 jsdom 少 | npm 包 |
| **Playwright** | 更轻的浏览器自动化 | 成本较高 | 浏览器实例 |

## 改进推荐

### 短期：使用完整堆栈信息（已实现）
```javascript
// 现在日志对象包含 stack 属性，您可以看到完整堆栈
console.error(err.stack);
```

### 中期：集成 source-map 库
```javascript
npm install source-map

// 如果 HTML 中的脚本是压缩的，使用 source-map 映射到源代码
```

### 长期：考虑 Playwright
```javascript
// 用于完整的浏览器环境测试
// 但明显变重，仅用于需要真实浏览器的情况
```

## 调试技巧

### 1. 启用详细错误输出
```javascript
const logs = await executeHtmlAndCollectLogs('/my-page.html', {
  throwOnScriptError: false,
  captureLevels: ['log', 'info', 'warn', 'error', 'debug'],
});

// 打印完整错误对象
logs.forEach(log => console.log(JSON.stringify(log, null, 2)));
```

### 2. 逐脚本调试
修改执行器，在每个脚本执行前输出：
```javascript
console.log(`执行脚本: ${script.src}`);
// 这样可以知道在哪个脚本出问题
```

### 3. 添加源代码注释
修改脚本代码，在关键位置添加标记：
```javascript
// 改进执行器的脚本收集部分
scripts.push({ 
  code: `// === ${script.src} ===\n${script.code}`,
  src: script.src 
});
```

这样错误堆栈中会显示脚本名称。

## 总结

**现在您可以看到完整的错误堆栈！** 关键改进：

✅ 错误日志现在包含 `stack` 属性，显示完整堆栈  
✅ 包含 `script` 属性，说明错误来自哪个脚本  
✅ 您可以从堆栈中找到真实的行号  

如果需要更精确的映射，可以使用 `source-map` 或 `stack-trace` 库。但现在已经足以定位问题所在了。

---

**相关开源项目**：
- [source-map](https://github.com/mozilla/source-map) - Mozilla
- [stack-trace](https://github.com/felixge/node-stack-trace) - Felix Geisendörfer
- [jest-environment-jsdom](https://github.com/facebook/jest/tree/main/packages/jest-environment-jsdom) - Meta (我们用的)
- [jsdom](https://github.com/jsdom/jsdom) - 完整 DOM 实现
