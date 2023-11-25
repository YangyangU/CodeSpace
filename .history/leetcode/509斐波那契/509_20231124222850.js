n = 20

// var fib = function(n) {
//     return n < 2 ? n : fib(n - 2) + fib(n - 1);
// };

var fib = function(n) {
    let arr=[]
    arr[0]=1
    arr[1]=1
    for (let i = 2; i <= n; i++) {
        arr[i]=arr[i-1]+arr[i-2]
        
    }    
};


console.log(fib(n));