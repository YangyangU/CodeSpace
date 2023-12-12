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

// var countBits = function(n) {
//     // 创建一个数组用于存储每个数字的二进制表示中 1 的个数
//     const bits = new Array(n + 1).fill(0);

//     // 动态规划计算每个数字的二进制表示中 1 的个数
//     for (let i = 1; i <= n; i++) {
//         // 对于数字 i，可以通过 i >> 1（右移一位）得到 i 除最低位外的部分，
//         // 然后加上 i & 1（取最低位），即可得到 i 的二进制表示中 1 的个数
//         bits[i] = bits[i >> 1] + (i & 1);
//     }
//     return bits;
// };