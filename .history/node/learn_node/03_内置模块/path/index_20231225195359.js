const path = require('path');

// console.log(path);//里面的方法都能跟操作系统交互

// console.log(path.join('a','b','c'));
// console.log(path.join(process.cwd()));//项目的绝对路径  d:\CodeSpace

// console.log(path.join(process.cwd(),'model','index'));//当前文件的绝对路径 d:\CodeSpace\model\index

// console.log(path.resolve('a','b','c'));//d:\CodeSpace\a\b\c

// console.log(path.dirname(process.cwd()));//返回路径的目录名  d:\
// console.log(path.dirname('/a/b/c'));//返回路径的目录名  /a/b

// console.log(path.basename('/a/b/c.js')); //c.js

// console.log(path.basename(__filename)); //index.js
// console.log(path.basename(__filename,'.js'));//index //去除后缀
// console.log(path.extname(__filename)); //.js

// console.log(path.normalize('a//b/c.js')); //a\b\c.js  //将路径格式化成标准路径

// console.log(path.parse(__filename));//解析目录

// {
//     root: 'd:\\',
//         dir: 'd:\\CodeSpace\\node\\learn_node\\03_内置模块\\path',
//             base: 'index.js',
//                 ext: '.js',
//                     name: 'index'
// }


console.log('foo/bar/baz'.split(path.sep));