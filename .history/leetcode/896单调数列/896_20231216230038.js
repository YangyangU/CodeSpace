nums = [1,2,2,3]

var isMonotonic = function(nums) {
    if(nums[0]>=nums[nums.length]){
        for (var i = 0; i < nums.length-1; i++){
            if(nums[i]<=nums[i+1]){
                return true
            }
        }
    }else{
        for (var i = 0; i < nums.length-1; i++){
            if(nums[i]>=nums[i+1] || nums[i+1]<=nums[i]){
                return true
            }
        }
    }
    
    return false
};

console.log(isMonotonic(nums));