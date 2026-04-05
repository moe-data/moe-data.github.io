const { executeHtmlAndCollectLogs } = require('./dist/js/util/html-js-executor.js');

(async () => {
  console.log('测试 /index.html...\n');
  try {
    const logs = await executeHtmlAndCollectLogs('/index.html', {
      throwOnScriptError: false,
      captureLevels: ['error'],
      waitForMs: 100,
    });
    
    console.log(`✓ 成功，收集 ${logs.length} 条错误日志`);
    if (logs.length > 0) {
      console.log('\n错误:');
      logs.forEach(log => console.log(`  - ${log.message.substring(0, 120)}`));
    }
  } catch (e) {
    console.error(`✗ 失败: ${e.message}`);
  }
})();
