s = "I"

var romanToInt = function(s) {
    let num = 0
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "I":a = 1 ;break
            case "V":a = 5 ;break
            case "X":a = 10 ;break
            case "L":a = 50 ;break
            case "C":a = 100 ;break
            case "D":a = 500 ;break
            case "M":a = 1000 ;break
        }
    }
    return num
};

console.log(romanToInt(s));