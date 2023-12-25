const path = require('path');

// console.log(path);//里面的方法都能跟操作系统交互

// console.log(path.join('a','b','c'));
// console.log(path.join(process.cwd()));//项目的绝对路径  d:\CodeSpace

// console.log(path.join(process.cwd(),'model','index'));//当前文件的绝对路径 d:\CodeSpace\model\index

// console.log(path.resolve('a','b','c'));//d:\CodeSpace\a\b\c

// console.log(path.dirname(process.cwd()));//返回路径的目录名  d:\
// console.log(path.dirname('/a/b/c'));//返回路径的目录名  /a/b

console.log(path.basename('/a/b/c.js')); //c.js
