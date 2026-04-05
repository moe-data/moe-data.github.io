/**
 * 改进的 HTML JS 诊断工具
 * 显示完整的错误堆栈，而不是尝试重新格式化
 */

const { executeHtmlAndCollectLogs } = require('./html-js-executor.js');

async function diagnoseHtml(htmlPath) {
  console.log(`\n${'═'.repeat(70)}`);
  console.log(`诊断: ${htmlPath}`);
  console.log('═'.repeat(70));

  try {
    const logs = await executeHtmlAndCollectLogs(htmlPath, {
      throwOnScriptError: false,
      captureLevels: ['log', 'info', 'warn', 'error', 'debug'],
      waitForMs: 200,
    });

    console.log(`\n✓ 执行成功，收集 ${logs.length} 条日志\n`);

    // 按级别统计
    const stats = {};
    logs.forEach(log => {
      if (!stats[log.level]) stats[log.level] = 0;
      stats[log.level]++;
    });

    console.log('日志统计:');
    Object.entries(stats).forEach(([level, count]) => {
      console.log(`  ${level}: ${count}`);
    });

    // 详细显示所有错误（包含完整堆栈！）
    const errors = logs.filter(l => l.level === 'error');
    if (errors.length > 0) {
      console.log(`\n${'─'.repeat(70)}`);
      console.log(`❌ 执行错误详情 (${errors.length} 条):`);
      console.log('─'.repeat(70));
      
      errors.forEach((err, idx) => {
        console.log(`\n【错误 #${idx + 1}】`);
        console.log(`  消息: ${err.message}`);
        
        if (err.script) {
          console.log(`  脚本: ${err.script}`);
        }
        
        if (err.stack) {
          console.log(`  💥 堆栈信息 (这是你需要看的!):`);
          // 格式化堆栈，每行缩进
          const stackLines = err.stack.split('\n');
          stackLines.forEach(line => {
            if (line.trim()) {
              console.log(`    ${line}`);
            }
          });
        }
      });
      
      console.log('\n' + '─'.repeat(70));
      console.log('💡 提示: 查看上面堆栈中的行号，找到实际出错的代码位置');
      console.log('─'.repeat(70));
    } else {
      console.log('\n✓ 没有执行错误');
    }

    // 显示其他日志
    const otherLogs = logs.filter(l => l.level !== 'error');
    if (otherLogs.length > 0 && otherLogs.length <= 10) {
      console.log('\n其他日志:');
      otherLogs.forEach((log, idx) => {
        console.log(`  [${log.level}] ${log.message}`);
      });
    } else if (otherLogs.length > 10) {
      console.log(`\n共有 ${otherLogs.length} 条其他日志（已省略）`);
    }

  } catch (error) {
    console.error('\n✗ 执行过程中发生异常:');
    console.error(`\n【异常信息】`);
    console.error(`  ${error.message}`);
    
    if (error.stack) {
      console.error(`\n【完整堆栈 - 这是你需要的!】`);
      const stackLines = error.stack.split('\n');
      stackLines.forEach(line => {
        if (line.trim()) {
          console.error(`  ${line}`);
        }
      });
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('\n诊断工具 - 查看 HTML 执行时的真实错误堆栈');
    console.log('═'.repeat(70));
    console.log('\n使用方法:');
    console.log('  node html-js-debug.js <html文件> [html文件2] ...\n');
    console.log('示例:');
    console.log('  node html-js-debug.js /index.html');
    console.log('  node html-js-debug.js /quest.html /sortie.html');
    console.log('  node html-js-debug.js /result.html?t=202602\n');
    console.log('═'.repeat(70) + '\n');
    return;
  }

  console.log('\n正在诊断以下 HTML 文件:\n');
  for (const htmlPath of args) {
    console.log(`  • ${htmlPath}`);
  }

  for (const htmlPath of args) {
    await diagnoseHtml(htmlPath);
  }

  console.log('\n' + '═'.repeat(70));
  console.log('诊断完成');
  console.log('═'.repeat(70) + '\n');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { diagnoseHtml };

