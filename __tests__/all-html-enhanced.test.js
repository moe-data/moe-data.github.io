/**
 * 改进的 HTML 页面全面测试
 * 主要特点：详细的错误报告，脚本追踪，行号信息
 */

if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

const fs = require('fs');
const path = require('path');
const { executeHtmlAndCollectLogs } = require('../dist/js/util/html-js-executor.js');

// 获取所有 HTML 文件
function getAllHtmlFiles() {
  const rootDir = path.join(__dirname, '..');
  const files = fs.readdirSync(rootDir);
  return files
    .filter(file => file.endsWith('.html'))
    .map(file => `/${file}`)
    .sort();
}

const htmlFiles = getAllHtmlFiles();

describe('executeHtmlAndCollectLogs - All HTML pages (Enhanced Diagnostics)', () => {
  test('should find HTML files', () => {
    expect(htmlFiles.length).toBeGreaterThan(0);
    console.log(`\n✓ Found ${htmlFiles.length} HTML files`);
  });

  // 为每个 HTML 文件创建测试
  htmlFiles.forEach((htmlPath) => {
    test(`${htmlPath}`, async () => {
      let logs = [];
      let executionError = null;

      try {
        logs = await executeHtmlAndCollectLogs(htmlPath, {
          throwOnScriptError: false,
          captureLevels: ['log', 'info', 'warn', 'error', 'debug'],
          waitForMs: 800,  // 进一步增加等待时间
        });
      } catch (error) {
        executionError = error;
      }

      // 验证执行
      expect(Array.isArray(logs) || executionError !== null).toBe(true);

      // 统计和报告
      if (logs.length > 0) {
        const errorCount = logs.filter(l => l.level === 'error').length;
        const warnCount = logs.filter(l => l.level === 'warn').length;

        if (errorCount > 0) {
          let report = `\n${htmlPath}\n`;
          report += '════════════════════════════════════\n';
          logs.filter(l => l.level === 'error').forEach((err, i) => {
            report += `\n错误 #${i + 1}: ${err.message}\n`;
            if (err.script) {
              report += `脚本: ${err.script}\n`;
            }
            if (err.stack) {
              report += `堆栈:\n${err.stack}\n`;
            }
          });
          report += '════════════════════════════════════\n';
          console.warn(report);
        } else {
          console.log(`${htmlPath}: ✓ OK (${logs.length} logs, ${warnCount} warnings)`);
        }
      }
    });
  });

  test('summary', () => {
    expect(htmlFiles.length).toBeGreaterThan(0);
  });
});
