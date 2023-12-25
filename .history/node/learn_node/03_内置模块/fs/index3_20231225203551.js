const fs = require('fs');

// const img = fs.readFileSync('./avatar.jpg','utf8')
// const img = fs.readFileSync('./avatar.jpg','base64')
const img = fs.readFileSync('./avatar.jpg')   //默认buffer流
// console.log(img)
// console.log(Buffer.isBuffer(img)) //true
// console.log(img.length) //521741
// console.log(img.toString()) //读成base64编码

fs.writeFileSync('./pic/avatar.jpg',img) //写入pic文件夹下
