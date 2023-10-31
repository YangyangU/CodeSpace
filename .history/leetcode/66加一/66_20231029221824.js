digits=[1,2,3]

var plusOne = function(digits) {
    var len=digits.length;
    digits.unshift(1);
    if (digits.length==0) return 0;
    if(digits[len-1]!='9'){
        digits[len-1]+=1;
    }
    else{
        digits[len-1]=0;
        digits[len-2]+=1;
    }
    return digits;
};

console.log(plusOne(digits));