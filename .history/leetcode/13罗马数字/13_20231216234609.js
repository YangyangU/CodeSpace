s = "I"

var romanToInt = function(s) {
    let num = 0
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "I":1 ;break
            case "V":5 ;break
            case "X":10 ;break
            case "L":50 ;break
            case "C":100 ;break
            case "D":500 ;break
            case "M":1000 ;break
        }
        num = s[i]
    }
    return num
};

console.log(romanToInt(s));