nums = [1,2,2,3]

var isMonotonic = function(nums) {
    for (var i = 0; i < nums.length-1; i++){
        if(nums[i]<=nums[i+1]){
            return true
        }
    }
    return false
};

console.log(isMonotonic(nums));