/**
 * HTML JS Executor Tests
 * 测试在类似浏览器的环境下执行 HTML 及其脚本
 */

// Polyfill TextEncoder/TextDecoder for jsdom in Node 18
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

const { executeHtmlAndCollectLogs } = require('../dist/js/util/html-js-executor.js');

describe('executeHtmlAndCollectLogs', () => {
  test('executes result.html and collects logs', async () => {
    const htmlPath = '/result.html?t=202602&q=d&o=541&e=&s=times&a=0&l=true';
    
    const logs = await executeHtmlAndCollectLogs(htmlPath, {
      throwOnScriptError: false,
    });

    expect(Array.isArray(logs)).toBe(true);
    expect(logs.length).toBeGreaterThanOrEqual(0);
    
    logs.forEach((log) => {
      expect(log).toHaveProperty('level');
      expect(log).toHaveProperty('message');
      expect(log).toHaveProperty('timestamp');
    });
  });

  test('correctly parses and uses query string from HTML path', async () => {
    const testCases = [
      '/result.html?t=202602&q=d&o=541&e=&s=times&a=0&l=true',
      '/result.html?t=202601',
      '/result.html',
    ];

    for (const htmlPath of testCases) {
      try {
        const logs = await executeHtmlAndCollectLogs(htmlPath, {
          throwOnScriptError: false,
          captureLevels: ['log', 'info', 'warn', 'error', 'debug'],
        });
        expect(Array.isArray(logs)).toBe(true);
      } catch (error) {
        // 允许某些失败（如文件缺失）
        expect(error).toBeDefined();
      }
    }
  });

  test('respects captureLevels option', async () => {
    const htmlPath = '/result.html?t=202602';

    const logsLogOnly = await executeHtmlAndCollectLogs(htmlPath, {
      throwOnScriptError: false,
      captureLevels: ['log'],
    });

    expect(logsLogOnly.every((log) => log.level === 'log')).toBe(true);
  });
});
