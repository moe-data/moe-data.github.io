/**
 * HTML JS Executor - Usage Examples
 * 
 * 本文件展示如何使用 executeHtmlAndCollectLogs 函数
 * 来在类似浏览器的环境下执行 HTML 中的脚本，并收集日志
 */

const { executeHtmlAndCollectLogs } = require('./html-js-executor.js');

/**
 * 示例 1: 基础用法 - 执行单个 HTML 并收集日志
 */
async function example1_BasicUsage() {
  console.log('=== 示例 1: 基础用法 ===\n');

  const logs = await executeHtmlAndCollectLogs('/result.html?t=202602&q=d&o=541&e=&s=times&a=0&l=true', {
    throwOnScriptError: false, // 记录错误而不是抛出
  });

  console.log(`收集到 ${logs.length} 条日志：`);
  logs.forEach((log, index) => {
    console.log(`  ${index + 1}. [${log.level}] ${log.message}`);
  });
}

/**
 * 示例 2: 过滤日志级别 - 仅收集特定级别的日志
 */
async function example2_FilterLevels() {
  console.log('\n=== 示例 2: 仅收集 error 级日志 ===\n');

  const logs = await executeHtmlAndCollectLogs('/pie.html', {
    captureLevels: ['error'], // 仅捕获 error
    throwOnScriptError: false,
  });

  console.log(`发现 ${logs.length} 条错误日志：`);
  logs.forEach((log) => {
    console.log(`  - ${log.message}`);
  });
}

/**
 * 示例 3: 脚本错误处理 - 让脚本错误导致测试失败
 */
async function example3_StrictErrorHandling() {
  console.log('\n=== 示例 3: 严格错误处理 ===\n');

  try {
    const logs = await executeHtmlAndCollectLogs('/result.html', {
      throwOnScriptError: true, // 脚本错误时抛出异常
    });
    console.log(`✓ 成功执行，收集 ${logs.length} 条日志`);
  } catch (error) {
    console.error(`✗ 脚本执行失败：${error.message}`);
  }
}

/**
 * 示例 4: 等待异步操作 - 使用 waitForMs 等待异步操作完成
 */
async function example4_WaitForAsync() {
  console.log('\n=== 示例 4: 等待异步操作 ===\n');

  const logs = await executeHtmlAndCollectLogs('/result.html', {
    throwOnScriptError: false,
    waitForMs: 500, // 等待 500ms，让异步回调有时间完成
  });

  console.log(`执行完成，收集 ${logs.length} 条日志`);

  // 统计日志
  const stats = {};
  logs.forEach((log) => {
    stats[log.level] = (stats[log.level] || 0) + 1;
  });

  console.log('日志统计：');
  Object.entries(stats).forEach(([level, count]) => {
    console.log(`  ${level}: ${count} 条`);
  });
}

/**
 * 示例 5: 测试多个 HTML 文件
 */
async function example5_TestMultipleHtml() {
  console.log('\n=== 示例 5: 测试多个 HTML 文件 ===\n');

  const htmlFiles = ['/result.html', '/pie.html', '/ship.html', '/index.html'];

  for (const htmlPath of htmlFiles) {
    try {
      const logs = await executeHtmlAndCollectLogs(htmlPath, {
        throwOnScriptError: false,
        captureLevels: ['error'], // 仅关心错误
      });

      const errorCount = logs.filter(l => l.level === 'error').length;
      const status = errorCount === 0 ? '✓' : '✗';
      console.log(`${status} ${htmlPath}: ${errorCount} 个错误`);
    } catch (error) {
      console.log(`✗ ${htmlPath}: 无法执行 (${error.message.substring(0, 50)})`);
    }
  }
}

/**
 * 示例 6: 日志分析 - 分析收集到的日志
 */
async function example6_LogAnalysis() {
  console.log('\n=== 示例 6: 日志分析 ===\n');

  const logs = await executeHtmlAndCollectLogs('/result.html', {
    throwOnScriptError: false,
    captureLevels: ['log', 'info', 'warn', 'error', 'debug'],
  });

  // 按级别分组
  const grouped = {};
  logs.forEach((log) => {
    if (!grouped[log.level]) grouped[log.level] = [];
    grouped[log.level].push(log);
  });

  console.log(`总计 ${logs.length} 条日志\n`);

  // 显示各级别摘要
  Object.entries(grouped).forEach(([level, items]) => {
    console.log(`${level.toUpperCase()} (${items.length} 条):`);
    items.slice(0, 3).forEach((log, index) => {
      const msg = log.message.substring(0, 80);
      console.log(`  ${index + 1}. ${msg}${msg.length > 80 ? '...' : ''}`);
    });
    if (items.length > 3) {
      console.log(`  ... 及 ${items.length - 3} 条`);
    }
  });
}

/**
 * 示例 7: 集成测试 - 用于 Jest 测试
 */
function example7_JestIntegration() {
  console.log('\n=== 示例 7: Jest 测试集成 ===\n');

  const testCode = `
test('my HTML page executes without errors', async () => {
  const logs = await executeHtmlAndCollectLogs('/my-page.html', {
    throwOnScriptError: true, // 让错误导致测试失败
  });

  // 验证日志结构
  expect(Array.isArray(logs)).toBe(true);
  logs.forEach((log) => {
    expect(log).toHaveProperty('level');
    expect(log).toHaveProperty('message');
    expect(log).toHaveProperty('timestamp');
  });
});
  `;

  console.log(testCode);
}

/**
 * 主函数 - 运行所有示例
 */
async function runAllExamples() {
  console.log('HTML JS Executor - 使用示例\n');
  console.log('=' .repeat(60));

  try {
    // 注意：部分示例需要存在相应的 HTML 文件
    // 如果文件不存在，会捕获异常并继续下一个示例

    await example1_BasicUsage();
    await example2_FilterLevels();
    await example3_StrictErrorHandling();
    await example4_WaitForAsync();
    await example5_TestMultipleHtml();
    await example6_LogAnalysis();
    example7_JestIntegration();
  } catch (error) {
    console.error('\n执行示例时出错：', error.message);
  }

  console.log('\n' + '='.repeat(60));
  console.log('所有示例执行完成');
}

// 如果直接运行此文件
if (require.main === module) {
  runAllExamples().catch(console.error);
}

// 导出示例函数供外部使用
module.exports = {
  example1_BasicUsage,
  example2_FilterLevels,
  example3_StrictErrorHandling,
  example4_WaitForAsync,
  example5_TestMultipleHtml,
  example6_LogAnalysis,
  example7_JestIntegration,
  runAllExamples,
};
