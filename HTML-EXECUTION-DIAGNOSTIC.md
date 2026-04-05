# HTML 执行和日志收集 - 诊断报告

**生成日期**: 2026-04-04  
**状态**: 部分功能可用，需要逐步改进

## 当前状态

### ✅ 已完成
- `executeHtmlAndCollectLogs()` 核心函数实现
- jQuery 模拟库（40+ 方法）
- console 日志拦截和收集
- localStorage/sessionStorage 模拟
- 脚本执行环境隔离

### ⚠️ 部分工作
- **单文件测试** (`result.html`): ✅ 3/3 测试通过
- **全仓库测试** (`all-html-pages.test.js`): ⚠️ 23/26 通过

### ❌ 已识别的问题

#### 1. **null 引用错误** (最常见)
```
Error: Cannot read properties of null (reading 'length')
Error: Cannot read properties of null (reading '101')
```
**原因**: 某些全局变量或 AJAX 返回的数据为 null
**影响**: /index.html, /quest.html, /payitem.html 等

#### 2. **未定义的全局变量**
```
ReferenceError: BodyIsFt is not defined
```
**原因**: 变量在脚本加载或初始化顺序中丢失
**影响**: /sortie.html

#### 3. **JSON 解析错误**
```
Unexpected token u in JSON at position 0
```
**原因**: 某处尝试解析非有效的 JSON 数据

## 改进建议

### 优先级 1: 改进错误追踪（解决"看不出来是第几行"的问题）

已实现改进:
- ✅ 脚本名称和行号信息 (format: `dist/js/jgs.js:100:7`)
- ✅ 错误堆栈追踪
- ✅ 增强的测试报告输出

### 优先级 2: 补完 jQuery 模拟库

缺失的常用方法:
- `$.ajax()` / `$.post()` - AJAX 调用的完整实现
- `.find()` - DOM 查询
- `.val()` - 表单值获取
- `.on('event')` - 事件处理链
- `.off()` - 移除事件监听

### 优先级 3: 改进数据加载

问题:
- 本地 JSON 文件加载可能失败
- AJAX 调用返回 null
- 数据初始化顺序混乱

解决方案:
- 实现 `$.getJSON()` 的完整错误处理
- 初始化默认数据结构
- 添加数据验证

### 优先级 4: 解决全局变量初始化

问题:
- 全局变量依赖于脚本加载顺序
- 某些变量未被显式定义

解决方案:
- 在 vm context 中预定义常见全局变量
- 在执行前初始化数据结构
- 分析脚本加载顺序

## 针对浏览器不一致的说明

虚拟 DOM (jsdom) vs 真实浏览器的差异是固有的:

1. **DOM API 支持不完全** - jsdom 不支持所有 DOM 方法
2. **事件模型不同** - 某些事件不会触发
3. **网络请求** - 虚拟环境无法真正加载外部资源
4. **计时问题** - setTimout/setInterval 可能行为不同
5. **样式计算** - 无法计算实际的 CSS 样式

## 使用建议

### 对于可靠的 HTML 执行
```javascript
const { executeHtmlAndCollectLogs } = require('./dist/js/util/html-js-executor');

// 推荐配置
const logs = await executeHtmlAndCollectLogs('/my-page.html', {
  throwOnScriptError: false,    // 不要中断，收集所有错误
  captureLevels: ['log', 'error', 'warn'],  // 关键日志等级
  waitForMs: 200,               // 给异步操作足够时间
});

// 分析错误
const errors = logs.filter(l => l.level === 'error');
errors.forEach(err => {
  console.error(`${err.message}`);
});
```

### 诊断特定 HTML 文件
```javascript
// 使用增强诊断测试
npm test -- __tests__/all-html-enhanced.test.js
```

## 后续改进路线图

- [ ] 实现完整的 $.ajax() 模拟
- [ ] 添加更多 jQuery DOM 操作方法
- [ ] 改进全局变量初始化顺序
- [ ] 添加脚本依赖分析工具
- [ ] 创建脚本执行顺序可视化工具
- [ ] 实现源代码行号映射 (SourceMap)

## 文件清单

| 文件 | 用途 | 状态 |
|------|------|------|
| `dist/js/util/html-js-executor.js` | 核心执行引擎 | ✅ 完成 |
| `dist/js/util/html-js-demo.js` | 使用示例 | ✅ 完成 |
| `dist/js/util/html-js-debug.js` | 调试工具 | ✅ 完成 |
| `__tests__/all-js.test.js` | 单文件测试 | ✅ 通过 |
| `__tests__/all-html-pages.test.js` | 全仓库测试 | ⚠️ 部分通过 |
| `__tests__/all-html-enhanced.test.js` | 增强诊断测试 | ✅ 完成 |

## 联系和反馈

如遇到特定 HTML 文件的问题，请参考错误消息中的脚本名和行号，这能帮助快速定位问题所在。
