const fs = require('fs');

// const img = fs.readFileSync('./avatar.jpg','utf8')
const img = fs.readFileSync('./avatar.jpg','base64')

console.log(img)