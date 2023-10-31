digits=[9,9,9]

var plusOne = function(digits) {
    var len=digits.length;
    for(var i=len-1; i>=0; i--){
        if(digits[i]!=9){
            digits[i]+=1;
            return digits;
        }else{
            digits[i]=0;
        }
    }
    digits.unshift(1)
    return digits;
};

console.log(plusOne(digits));