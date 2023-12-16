s = "I"

var romanToInt = function(s) {
    let num = 0
    let a = 0
    let pre = 
    for (var i = 0; i < s.length; i++) {
        
        if(s[i] < s[i+1]){

        }
    }
    return num
};

var get=(a)=>{
    switch (a) {
        case "I":return 1 ;
        case "V":return 5 ;
        case "X":return 10 ;
        case "L":return 50 ;
        case "C":return 100 ;
        case "D":return 500 ;
        case "M":return 1000 ;
    }
}

console.log(romanToInt(s));