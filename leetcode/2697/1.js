// 字符串不能原地修改

var makeSmallestPalindrome = function(s) {
    s = s.split('')
    for (var i = 0; i < s.length/2;i++) {
        if(s[i] === s[s.length - 1-i]){
            continue
        }
        if(s[i] < s[s.length - 1 - i]) {
            s[s.length - 1 - i] = s[i]
        }else{
            s[i] = s[s.length - 1 - i]
        }
    }
    return s.join('')
};