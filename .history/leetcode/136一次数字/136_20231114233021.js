nums = [4,1,2,1,2]


var singleNumber = function(nums) {
    for(var i=0; i<nums.length; i++){
        if (nums.indexOf(nums[i])===nums.lastIndexOf(nums[i])){
            return nums[i];
        }
    }
};

console.log(singleNumber(nums));