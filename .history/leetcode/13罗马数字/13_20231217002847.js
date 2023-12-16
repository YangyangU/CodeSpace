s = "IV"


//用一个函数专门计算每个字符对应的数字,判断后一个是否大于前面 一个如果是则做减法,不是则加.
// var romanToInt = function(s) {
//     let num = 0
//     if(s.length <= 1){
//         return get(s)
//     }
//     for (var i = 0; i < s.length; i++) {
//         if(get(s[i]) < get(s[i+1])){
//             num -= get(s[i])
//         }else{
//             num += get(s[i])
//         }
//     }
//     return num
// };

// var get=(a)=>{
//     switch (a) {
//         case "I":return 1 ;
//         case "V":return 5 ;
//         case "X":return 10 ;
//         case "L":return 50 ;
//         case "C":return 100 ;
//         case "D":return 500 ;
//         case "M":return 1000 ;
//         default:return 0
//     }
// }


//哈希表写法
var romanToInt = function(s) {
    var hashNum = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    var result = 0;
    for(let i = 0;i<s.length;i++){
        hashNum[s[i]] < hashNum[s[i+1]] ? result -= hashNum[s[i]] : result += hashNum[s[i]]
    }
    return result;
};
console.log(romanToInt(s));