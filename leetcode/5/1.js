//遍历每个可能的回文中心
//左右两边相等的继续拓展

var longestPalindrome = function(s) {
    if (s.length<2){
        return s
    }
    let res = ''
    for (let i = 0; i < s.length; i++) {
        helper(i, i)
        if(s[i] === s[i + 1]) {
        helper(i, i+1)
    } 
    }

    function helper(m, n) {
        while (m >= 0 && n < s.length && s[m] == s[n]) {
            m--
            n++
        }
        if (n - m - 1 > res.length) {
            res = s.slice(m + 1, n)
        }
    }
    return res
};
