const fs = require('fs');
const path = require('path');
const ignore = require('ignore');

// ignore
function getIgnoreRules(dir) {
    const ig = ignore();
    const gitignorePath = path.join(dir, '.gitignore');
    if (fs.existsSync(gitignorePath)) {
        const ignoreContent = fs.readFileSync(gitignorePath, 'utf8').trim();
        ig.add(ignoreContent.split('\n').map(rule => rule.trim()));
    }
    return ig;
}

// 统计指定文件的行数
function countLinesInFile(filePath) {
    return new Promise((resolve, reject) => {
        let lineCount = 0;
        const readStream = fs.createReadStream(filePath);
        readStream
            .on('data', (chunk) => {
                lineCount += chunk.toString('utf-8').split('\n').length;
            })
            .on('end', () => resolve(lineCount))
            .on('error', (err) => reject(err));
    });
}

// 递归遍历目录，统计每种文件类型的文件数量和代码行数
async function countFilesAndLines(dir, stats, ig) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const relativePath = path.relative(process.cwd(), filePath);
        const stat = fs.statSync(filePath);

        // 跳过被忽略的文件和目录
        if (ig.ignores(relativePath)) {
            continue;
        }

        if (stat.isDirectory()) {
            // 递归处理子目录
            await countFilesAndLines(filePath, stats, ig);
        } else {
            const ext = path.extname(file);
            if (stats[ext]) {
                stats[ext].count += 1;
                stats[ext].lines += await countLinesInFile(filePath);
            }
        }
    }
}

// 主入口函数
async function getCodeStats(dir = process.cwd()) {
    // 初始化统计对象
    const stats = {
        '.html': { count: 0, lines: 0 },
        '.css': { count: 0, lines: 0 },
        '.js': { count: 0, lines: 0 },
        sum: { count: 0, lines: 0 }
    };

    const ig = getIgnoreRules(dir);

    // 统计文件数量和行数
    await countFilesAndLines(dir, stats, ig);

    // 计算总数
    stats.sum.count = stats['.html'].count + stats['.css'].count + stats['.js'].count;
    stats.sum.lines = stats['.html'].lines + stats['.css'].lines + stats['.js'].lines;

    // 格式化输出
    console.log(`
----------------------------------------
  类型        文件数量        代码行数 
----------------------------------------
  HTML           ${stats['.html'].count}               ${stats['.html'].lines}
  CSS            ${stats['.css'].count}               ${stats['.css'].lines}
  JS             ${stats['.js'].count}               ${stats['.js'].lines}
----------------------------------------
  SUM            ${stats.sum.count}               ${stats.sum.lines}
----------------------------------------
  `);
    return stats;
}

// 导出函数
module.exports = { getCodeStats, countLinesInFile };
