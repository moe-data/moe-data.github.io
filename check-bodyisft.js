const { executeHtmlAndCollectLogs } = require('./dist/js/util/html-js-executor.js');
const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html')).map(f => '/' + f).sort();

let totalPassed = 0;
let totalFailed = 0;
let totalBodyIsFtErrors = 0;

async function testFile(file) {
  try {
    const logs = await executeHtmlAndCollectLogs(file, {
      throwOnScriptError: false,
      captureLevels: ['error'],
      waitForMs: 800  // 增加等待时间
    });
    const errors = logs.filter(l => l.level === 'error');
    const bodyIsFtErrors = errors.filter(e => e.message.includes('BodyIsFt'));

    if (bodyIsFtErrors.length > 0) {
      console.log('FAIL:', file, '- BodyIsFt errors:', bodyIsFtErrors.length, '(total errors:', errors.length + ')');
      totalFailed++;
      totalBodyIsFtErrors += bodyIsFtErrors.length;
    } else {
      console.log('PASS:', file, '- OK (total errors:', errors.length + ')');
      totalPassed++;
    }
  } catch (e) {
    console.log('ERROR:', file, '- Exception:', e.message);
    totalFailed++;
  }
}

(async () => {
  console.log('Checking all HTML files for BodyIsFt errors...\n');
  for (const file of htmlFiles) {
    await testFile(file);
  }
  console.log('\nSUMMARY:');
  console.log('Passed:', totalPassed);
  console.log('Failed:', totalFailed);
  console.log('Total BodyIsFt errors:', totalBodyIsFtErrors);
  console.log('Total files checked:', totalPassed + totalFailed);
})();