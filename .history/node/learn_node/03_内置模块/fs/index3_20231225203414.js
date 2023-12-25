const fs = require('fs');

// const img = fs.readFileSync('./avatar.jpg','utf8')
// const img = fs.readFileSync('./avatar.jpg','base64')
const img = fs.readFileSync('./avatar.jpg')   //默认buffer流
// fs.writeFileSync('./pic',img)
console.log(img)
console.log(Buffer.isBuffer(img)) //true
console.log(img.length) //521741
console.log(img.toString()) //521741