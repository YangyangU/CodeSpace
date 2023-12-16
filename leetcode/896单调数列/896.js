nums = [1,2,2,3]

var isMonotonic = function(nums) {
    if(nums[0]>=nums[nums.length-1]){
        for (var i = 0; i < nums.length-1; i++){
            if(nums[i]<nums[i+1]){
                return false
            }
        }
    }else{
        for (var i = 0; i < nums.length-1; i++){
            if(nums[i]>nums[i+1]){
                return false
            }
        }
    }
    return true
};

console.log(isMonotonic(nums));