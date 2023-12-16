s = "abab"

// s="ababab" 报错
// var repeatedSubstringPattern = function(s) {
//     s1 = s.substring(0, s.length/2)
//     console.log(s1);
//     return s === s1 + s1 
// };


// s ="abaababaab"  报错
// var repeatedSubstringPattern = function(s) {
//     let fast = 1
//     let slow = 0
//     let s1 = ''
//     let s2 = ''
//     if(s.length % 2 !== 0) return false
//     while (s[fast]) {
//         if(s[fast] === s[slow]){
//             s1 = s.substring(slow, fast)
//             break
//         }
//         fast++
//     }
//     for (let i = 0; i <s.length/s1.length; i++) {
//         s2+=s1
//     }
//     return s === s2
// };

var repeatedSubstringPattern = function(s) {
    let s1 = s + s
    return s1.substring(1,s1.length-1).includes(s)
};

console.log(repeatedSubstringPattern(s));