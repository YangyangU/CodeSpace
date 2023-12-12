var countBits = function(n) {
    let arr = []
    for(let i = 0; i < n; i++) {
        let count = 0
        for(let j = 0; j < i; j++) {
            count += i & 1
            i >>= 1
        }
        arr.push(count)

    }
    return arr
};