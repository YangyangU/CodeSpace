//文件系统
const fs = require('fs');

// 同步的方式
// const syncData = fs.readFileSync('d:\\CodeSpace\\node\\learn_node\\03_内置模块\\fs\\data.txt', {encoding:'utf8'});
const syncData = fs.readFileSync('./data.txt', {encoding:'gbk'});
console.log(syncData);