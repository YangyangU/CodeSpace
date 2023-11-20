nums = [1,2,3]

var permute = function(nums) {
    let res = []
    if(nums.length = 2){
        return [[nums[0],nums[1]], [nums[1],nums[0]]]
    }
    if(nums.length = 1){
        return [[nums[0]]]
    }else{
        for(var i = 0; i < nums.length; i++){
            for(var j = 0; j < nums[i].length; j++){
                res.push(nums[i][j]);
            }
        }
        return res;
    }
};

console.log(nums);