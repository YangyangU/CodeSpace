s = "abcd", t = "abcde"

var findTheDifference = function(s, t) {
    let res = 0
    for (var i = 0; i < t.length; i++) {
        if(!s.includes(t[i])){
            res = t[i];
        }
    }
    return res
};


console.log(findTheDifference(s, t));