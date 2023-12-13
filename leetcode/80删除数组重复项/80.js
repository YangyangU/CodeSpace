nums = [1,1,1,2,2,3]

var removeDuplicates = function(nums) {
    if(nums.length <= 2) {
        return nums
    }
    let slow = 2
    let fast = 2
    while(fast < nums.length){
        if(nums[fast] != nums[slow-2]){
            nums[slow] = nums[fast]
            slow ++
        }
        fast ++
    }
    return slow
};

console.log(removeDuplicates(nums));