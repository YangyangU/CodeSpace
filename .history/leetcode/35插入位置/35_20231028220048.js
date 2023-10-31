var nums = [1,3,5,6] 
target = 5

var searchInsert = function(nums, target) {

    if(nums.indexOf(target)){
        return nums.indexOf(target);
    }else{
        for(let i = 0; i < nums.length; i++) {
            if((nums[i] >target&&nums[i+2] <target)||(nums[i] <target&&nums[i+2] >target)){
                return i+1;
            }
    }
};

console.log(searchInsert(nums, target));