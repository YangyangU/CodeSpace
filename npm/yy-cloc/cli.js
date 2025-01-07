#!/usr/bin/env node

const { getCodeStats, countLinesInFile } = require('./index');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);

(async () => {
  if (args.length === 0) {
    // 如果没有指定参数，默认统计当前目录
    await getCodeStats();
  } else {
    const targetPath = path.resolve(args[0]);
    const stat = require('fs').statSync(targetPath);

    if (stat.isDirectory()) {
      // 如果指定的是目录，统计目录下的文件
      await getCodeStats(targetPath);
    } else {
      // 如果指定的是文件，输出该文件的代码行数
      const lines = await countLinesInFile(targetPath);
      console.log(`文件 ${targetPath} 有 ${lines} 行代码。`);
    }
  }
})();
