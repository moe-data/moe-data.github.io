/**
 * 测试 $.getJSON 是否正确加载数据
 * 特别是用于 possible.js 中的数据加载场景
 */

const { executeHtmlAndCollectLogs } = require('./dist/js/util/html-js-executor.js');
const fs = require('fs');
const path = require('path');

async function testGetJSON() {
  console.log('\n测试 $.getJSON 数据加载修复\n');
  console.log('═'.repeat(70));

  // 创建测试 HTML，模拟 possible.js 的场景
  const testHtmlContent = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body>
<script>
var testData = {};

// 模拟 possible.js 中的 $.getJSON 调用
console.log("开始加载测试数据...");

$.getJSON("parsed/api_mst_slotitem.json", function (result) {
  if (result) {
    testData.slotitem = result;
    console.log("✓ slotitem 加载成功，类型:", typeof result, "长度:", result.length);
  } else {
    console.log("✗ slotitem 加载失败，result 为:", result);
  }
});

$.getJSON("parsed/api_mst_slotitem_equiptype.json", function (res) {
  if (res) {
    testData.itype = res;
    console.log("✓ itype 加载成功，类型:", typeof res);
  } else {
    console.log("✗ itype 加载失败，res 为:", res);
  }
});

$.getJSON("dist/items/developable/possibles.json", function (result) {
  if (result) {
    testData.possibles = result;
    console.log("✓ possibles 加载成功，长度:", result.length);
  } else {
    console.log("✗ possibles 加载失败，result 为:", result);
  }
});

// 延迟检查所有数据
setTimeout(() => {
  console.log("");
  console.log("数据加载完成检查:");
  console.log("  slotitem:", testData.slotitem ? "✓ " + testData.slotitem.length + " 条" : "✗ 未正确加载");
  console.log("  itype:", testData.itype ? "✓" : "✗ 未正确加载");
  console.log("  possibles:", testData.possibles ? "✓ " + testData.possibles.length + " 条" : "✗ 未正确加载");
}, 100);
</script>
</body>
</html>
  `;

  // 保存临时测试 HTML
  const tempHtmlPath = path.join(__dirname, '_test_getjson_temp.html');
  fs.writeFileSync(tempHtmlPath, testHtmlContent, 'utf8');

  try {
    // 执行测试 HTML
    const logs = await executeHtmlAndCollectLogs('/_test_getjson_temp.html', {
      throwOnScriptError: false,
      captureLevels: ['log', 'error', 'warn', 'info'],
      waitForMs: 300,  // 给异步操作更多时间
    });

    console.log('\n执行日志:\n');
    logs.forEach(log => {
      const icon = 
        log.message.includes('✓') ? '✅' :
        log.message.includes('✗') ? '❌' :
        log.level === 'error' ? '⚠️ ' : '📝';
      console.log(`${icon} ${log.message}`);
    });

    // 检查是否有错误
    const errors = logs.filter(l => l.level === 'error');
    const successLogs = logs.filter(l => l.message.includes('✓'));

    console.log('\n' + '═'.repeat(70));
    console.log('\n测试结果:\n');

    if (successLogs.length > 0) {
      console.log(`✅ 成功: 有 ${successLogs.length} 条数据加载成功日志`);
    } else {
      console.log(`❌ 问题: 没有检测到成功的数据加载`);
    }

    if (errors.length > 0) {
      console.log(`\n⚠️  检测到 ${errors.length} 条错误:`);
      errors.forEach(err => {
        console.log(`\n  错误: ${err.message}`);
        if (err.script) console.log(`  脚本: ${err.script}`);
        if (err.stack) {
          const lines = err.stack.split('\n').slice(0, 3);
          console.log(`  堆栈:`);
          lines.forEach(line => {
            if (line.trim()) console.log(`    ${line}`);
          });
        }
      });
    } else {
      console.log('\n✅ 没有错误！$.getJSON 应该正常工作。');
    }

    console.log('\n' + '═'.repeat(70) + '\n');

  } finally {
    // 清理临时文件
    try {
      fs.unlinkSync(tempHtmlPath);
    } catch (e) {
      // 忽略删除错误
    }
  }
}

testGetJSON().catch(console.error);

