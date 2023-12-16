s = "abab"

// s="ababab" 报错
// var repeatedSubstringPattern = function(s) {
//     s1 = s.substring(0, s.length/2)
//     console.log(s1);
//     return s === s1 + s1 
// };

var repeatedSubstringPattern = function(s) {
    let fast = s[1]
    let slow = s[0]
    let i = 1
    while (fast) {
         i++
    }
    return s === s1 + s1 
};

console.log(repeatedSubstringPattern(s));