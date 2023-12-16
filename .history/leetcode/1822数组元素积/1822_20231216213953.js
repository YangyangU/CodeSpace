nums = [-1,-2,-3,-4,3,2,1]

var arraySign = function(nums) {
    let product = 0
    for (var i = 0; i < nums.length;i++) {
        product *= nums[i]
    }
    return product
};

console.log(arraySign(nums));