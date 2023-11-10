s = "IX"

var romanToInt = function(s) {
    var a = 0;
    var b = 0;
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
            while(i==0){
                sum=a;
            }
            
            if(a<=b)
            {
                sum+=a;
            }
            else
            {
                sum+=(a-2*b);
            }
            b=a;
        }
        return sum;
};

console.log(romanToInt(s));