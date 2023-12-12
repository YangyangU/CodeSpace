var countBits = function(n) {
    let arr = []
    let count = 0
    for(let i = 0; i < n; i++) {
        count += i & 1
        arr.push(count)
    }
};