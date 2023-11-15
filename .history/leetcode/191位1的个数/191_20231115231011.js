//to.String(2)将整数 n 转换为二进制字符串



// var hammingWeight = function(n) {
//     var binaryString = n.toString(2);
//     var count = 0;
    
//     for (var i = 0; i < binaryString.length; i++) {
//         if (binaryString[i] === '1') {
//             count++;
//         }
//     }
    
//     return count;
// };
var hammingWeight = function(n) {
    var count = 0;
    while (n !== 0) {
        count += n & 1;
        n >>>= 1; // 使用无符号右移操作符
    }
    return count;
};