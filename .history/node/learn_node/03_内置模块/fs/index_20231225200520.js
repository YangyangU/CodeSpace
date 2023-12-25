//文件系统
const fs = require('fs');

// 同步的方式
const syncData = fs.readFileSync('./data.txt', 'utf8');
console.log(syncData);