var removeDuplicates = function(nums) {
    if(nums.length == 0){return 0;}
    let slow = 0, fast = 1;
    while(fast < nums.length){
        if(nums[fast] != nums[slow]){
            slow = slow + 1;
            nums[slow] = nums[fast];
        }
        fast = fast + 1;
    }
    return slow + 1;
};
console.log(removeDuplicates([1,1,2,2,3,3,4,4,5,5]));