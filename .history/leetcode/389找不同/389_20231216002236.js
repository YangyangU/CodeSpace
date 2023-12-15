s = "abcd", t = "abcde"

  //异或运算
// var findTheDifference = function(s, t) {
//     let res = 0;

//     // 对 s 中每个字符的 Unicode 值进行异或操作
//     for (const ch of s) {
//         res ^= ch.charCodeAt();
//     }

//     // 对 t 中每个字符的 Unicode 值进行异或操作
//     for (const ch of t) {
//         res ^= ch.charCodeAt();
//     }

//     // 将异或的结果转换为对应的字符并返回
//     return String.fromCharCode(res);
// };

var findTheDifference = function(s, t) { 
    let count1 = 0
    let count2 = 0
    for (const ch of s) {
        count1 += ch.charCodeAt()
    }
    for (const ch of t) {
        count2 += ch.charCodeAt()
    }
}


console.log(findTheDifference(s, t));