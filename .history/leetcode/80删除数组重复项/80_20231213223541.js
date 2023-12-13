nums = [1,1,1,2,2,3]

var removeDuplicates = function(nums) {
    let n = 0
    for(let i = 1; i < nums.length; i++) {
        if(nums[n] === nums[i]){
            nums.splice(i, 1)
        }else{
            n++
        }
    }
    return nums.length
};

console.log(removeDuplicates(nums));