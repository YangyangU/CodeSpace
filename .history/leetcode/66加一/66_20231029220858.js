digits=[1,2,3]

var plusOne = function(digits) {
    var ans=digits.join('');
    ans=ans+1;
    return ans;
};

console.log(plusOne(digits));