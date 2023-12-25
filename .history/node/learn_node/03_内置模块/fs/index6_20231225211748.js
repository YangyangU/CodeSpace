const fs = require('fs');

// const info = fs.readdirSync('./test')  //文件名称
// console.log(info);

// fs.mkdirSync('./test-dir')  //创建一个目录
fs.mkdirSync('./test-dir/data/list',{recursive:true})  //报错 声明第二个参数
