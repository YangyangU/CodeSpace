nums = [1,1,1,2,2,3]

var removeDuplicates = function(nums) {
    if(nums.length === 0) return
    let slow = 0
    let fast = 1
    while(fast < nums.length){
        if(nums[fast] === nums[slow]){
            fast++
        }
    }
    return nums.length
};

console.log(removeDuplicates(nums));