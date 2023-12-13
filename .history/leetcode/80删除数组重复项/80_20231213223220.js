nums = [1,1,1,2,2,3]

var removeDuplicates = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        if(nums[0] === nums[i]){
            console.log(1);
        }
    }
    return nums.length
};

console.log(removeDuplicates(nums));