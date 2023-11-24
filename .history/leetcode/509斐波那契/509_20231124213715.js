n = 20

var fib = function(n) {
    return n < 2 ? n : fib(n - 2) + fib(n - 1);
};


console.log(fib(n));