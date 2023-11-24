var fibonacci = function(n){
    return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
}
//重复计算

var count = 0
var fibonacci = function(n){
    count++
    return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
}

fibonacci(2)
console.log(count);