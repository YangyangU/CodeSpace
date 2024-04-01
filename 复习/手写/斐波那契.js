
function fn (n){
    if(n<=2) return 1
    return fn(n-2) + fn(n-1)
}

function fn2(n){
    let arr = [1,1]
    for(let i = 2;i<n;i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n-1]
}

function fn3(n){
    let a = 1
    let b = 1
    for(let i = 3;i<=n;i++){
        [a,b] = [b,a+b]
    }
    return b
}

console.log(fn3(3));