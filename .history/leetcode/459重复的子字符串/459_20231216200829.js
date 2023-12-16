s = "abab"

var repeatedSubstringPattern = function(s) {
    s1 = s.substring(1, s.length/2)
    return s === s1 + s1 
};

console.log(repeatedSubstringPattern(s));