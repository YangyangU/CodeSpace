const fs = require('fs');

const img = fs.readFileSync('./avatar.jpg','utf8')

console.log(img)