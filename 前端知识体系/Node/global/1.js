const path = require('path')

console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));