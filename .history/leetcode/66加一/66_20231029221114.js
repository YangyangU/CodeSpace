digits=[1,2,3]

var plusOne = function(digits) {
    var len=digits.length;
    digits.unshift(1);
    var ans=digits.join('');
    if(digits[len-1]!='9'){
        digits[len-1]+=1;
    }
    return ans;
};

console.log(plusOne(digits));