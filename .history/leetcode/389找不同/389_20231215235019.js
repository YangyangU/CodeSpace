s = "abcd", t = "abcde"

var findTheDifference = function(s, t) {
    for (var i = 0; i < t.length; i++) {
        if(!s.includes(t[i])){
            let res = t[i];
        }
    }
    return res
};


console.log(findTheDifference(s, t));