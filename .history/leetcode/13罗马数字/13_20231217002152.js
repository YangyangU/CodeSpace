s = "I"

var romanToInt = function(s) {
    let num = 0
    if(s.length <= 1){
        return get(s)
    }
    for (var i = 0; i < s.length-1; i++) {
        if(get(s[i]) < get(s[i+1])){
            num -= get(s[i])
        }else{
            num += get(s[i])
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
        default:return 0
    }
}

console.log(romanToInt(s));