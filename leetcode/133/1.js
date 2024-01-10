
// 11111111111111111111111111111101

// 该数字在二进制表示中具有小数部分，而该函数只适用于整数。
// var hammingWeight = function(n) {
//     let count = 0
//     while(n > 0){
//         if(n&1){
//             count++
//         }
//         n=  n >> 1
//     }
//     return count
// };


//将输入的参数转换为二进制字符串
var hammingWeight = function(n) {
    let binaryString = n.toString(2);//二进制字符串
    let count = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === "1") {
            count++;
        }
    }
    return count;
};