// var fibonacci = function(n){
//     return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
// }
// //重复计算

const memoized = require('./memo.js')

//计算计算的次数
var count = 0
var fibonacci = function(n){
    count++
    return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
}
console.time("fibonacci");
fibonacci(50)
console.log(count);
console.timeEnd("fibonacci");

