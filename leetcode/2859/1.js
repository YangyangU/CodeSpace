var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let index = i
        while(index>0){
            if (index & 1) {
                count++;
            }
            index >>= 1;
        }
        if (count === k) {
            sum += nums[i];
        }
    }
    return sum;
};