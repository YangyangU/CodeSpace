s = "abab"

// s="ababab" 报错
// var repeatedSubstringPattern = function(s) {
//     s1 = s.substring(0, s.length/2)
//     console.log(s1);
//     return s === s1 + s1 
// };

var repeatedSubstringPattern = function(s) {
    let fast = 1
    let slow = 0
    let s1 = ''
    while (s[fast]) {
        if(fast === slow){
            s1 = s.substring()
        } 
        fast++
    }
    return s === s1 + s1 
};

console.log(repeatedSubstringPattern(s));