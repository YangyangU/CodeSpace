var countBits = function(n) {
    let arr = []
    for(let i = 0; i < n; i++) {
        let count = 0
        count += i & 1
        arr.push(count)
    }
};