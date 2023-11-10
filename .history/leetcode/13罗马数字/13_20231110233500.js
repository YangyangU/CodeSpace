s = "IX"

var romanToInt = function(s) {
    var a = 0;
    var b = 1;
    var sum=0;
    for(var i=0;i<s.length;i++){
        switch(s.charAt(i)){
            case 'I':a=1;break;
            case 'V':a=5;break;
            case 'X':a=10;break;
            case 'L':a=50;break;
            case 'C':a=100;break;
            case 'D':a=500;break;
            case 'M':a=1000;break;
            default:return 0;
        }
        if(a)
        sum+=a;
        b=a+1;
    }
};

console.log(romanToInt(s));