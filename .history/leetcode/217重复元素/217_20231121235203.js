nums = [1,2,3,1]

var containsDuplicate = function(nums) {
    for (var i = 0; i <nums.length; i++) {
        let a = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            let b = nums[j]
            if(a === b){
                return true
            }
            else{
                return false
            }
        }
    }
};

console.log(containsDuplicate(nums));