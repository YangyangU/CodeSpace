// var fibonacci = function(n){
//     return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
// }
// //重复计算

//计算计算的次数
var count = 0
var fibonacci = function(n){
    count++
    return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
}

fibonacci(30)
// console.log(count);
console.timeEnd("fibonacci");

