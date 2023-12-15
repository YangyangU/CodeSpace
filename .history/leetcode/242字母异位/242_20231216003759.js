s = "anagram", t = "nagaram"


//s ="ac"  t="bb" 报错
// var isAnagram = function(s, t) {
//     let count1 = 0
//     let count2 = 0
//     for(const ch of s){
//         count1 += ch.charCodeAt()
//     }
//     for(const ch of t){
//         count2 += ch.charCodeAt()
//     }
//     if(s.length === t.length && count1===count2){
//         return true
//     }
//     return false
// };

var isAnagram = function(s, t) {
    arr1 = s.split('')
    arr1.sort((a, b) =>a-b)
    return arr1
};

console.log(isAnagram(s,t));