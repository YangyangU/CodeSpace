var findLengthOfLCIS = function(nums) {
    let len = nums.length;
    if(len == 0) return 0;
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < nums[i + 1]){
            ans += 1;
        }else{
            ans = 1;
        }
        ans = Math.max(ans,len);
    }
    return ans;
};