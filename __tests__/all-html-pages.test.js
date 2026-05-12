/**
 * Test all HTML pages in the repository
 * Verifies that executeHtmlAndCollectLogs can process all HTML files without fatal errors
 */

// Polyfill TextEncoder/TextDecoder for jsdom in Node 18
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

const path = require('path');
const { executeHtmlAndCollectLogs } = require('../dist/js/util/html-js-executor.js');
const { getAllHtmlFiles } = require('../dist/js/util/paths.js');

const rootDir = path.join(__dirname, '..');
const htmlFiles = getAllHtmlFiles(rootDir);

describe('executeHtmlAndCollectLogs - All HTML pages', () => {
  test('should find HTML files', () => {
    expect(htmlFiles.length).toBeGreaterThan(0);
    console.log(`Found ${htmlFiles.length} HTML files: ${htmlFiles.join(', ')}`);
  });

  // 为每个 HTML 文件创建测试
  htmlFiles.forEach((htmlPath) => {
    test(`processes ${htmlPath} without fatal errors`, async () => {
      let logs = [];
      let errorMessage = null;

      try {
        logs = await executeHtmlAndCollectLogs(htmlPath, {
          throwOnScriptError: false, // 记录错误而不是抛出
          captureLevels: ['log', 'info', 'warn', 'error', 'debug'],
          waitForMs: 100, // 等待异步操作
        });
      } catch (error) {
        errorMessage = error.message;
        // 记录错误详情
        const errorDetail = error.stack || error.message;
        console.error(`\n❌ ${htmlPath} EXECUTION FAILED:`);
        console.error(`   ${errorMessage.split('\n')[0]}`);
        if (errorDetail.includes('\n')) {
          const stackLines = errorDetail.split('\n').slice(0, 3);
          stackLines.forEach(line => {
            if (line.trim()) console.error(`   ${line.trim()}`);
          });
        }
      }

      expect(errorMessage).toBeNull();
      expect(Array.isArray(logs)).toBe(true);

      if (logs.length > 0) {
        // 验证日志结构
        logs.forEach((log) => {
          expect(log).toHaveProperty('level');
          expect(log).toHaveProperty('message');
          expect(log).toHaveProperty('timestamp');
          expect(typeof log.level).toBe('string');
          expect(typeof log.message).toBe('string');
          expect(typeof log.timestamp).toBe('number');
        });

        // 统计日志
        const stats = {
          total: logs.length,
          errors: logs.filter(l => l.level === 'error').length,
          warnings: logs.filter(l => l.level === 'warn').length,
          info: logs.filter(l => l.level === 'info').length,
          logs: logs.filter(l => l.level === 'log').length,
          debug: logs.filter(l => l.level === 'debug').length,
        };

        console.log(`✓ ${htmlPath}: ${stats.total} logs (errors: ${stats.errors}, warnings: ${stats.warnings})`);

        // 显示错误日志摘要（仅先 2 个，含详细信息）
        const errorLogs = logs.filter(l => l.level === 'error');
        if (errorLogs.length > 0) {
          errorLogs.slice(0, 2).forEach((err) => {
            const msg = err.message;
            const scriptName = err.script || 'unknown';
            // 用 console.log 代替 console.error，避免 Jest 捕获调用堆栈
            console.log(`  ❌ ERROR in ${scriptName}: ${msg}`);
            // 如果有详细堆栈信息，也显示
            if (err.stack) {
              console.log(`     Stack: ${err.stack.split('\n')[0]}`);
            }
          });
        }
        expect(errorLogs).toHaveLength(0);
      }
    });
  });

  test('summary: all HTML files tested', () => {
    expect(htmlFiles.length).toBeGreaterThan(0);
    console.log(`\n✓ Successfully tested all ${htmlFiles.length} HTML files`);
  });
});
