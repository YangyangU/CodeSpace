const path = require('path');

console.log(path);//里面的方法都能跟操作系统交互

console.log(path.join('a','b','c'));
console.log(path.join(process.cwd()));