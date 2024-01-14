nums = [0,1,2,4,5,7]

var summaryRanges = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    const res = []
    let l = 0,r = 0
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[r] + 1) {
            r = i
        }else{
            res.push(r === l ? `${nums[l]}` : `${nums[l]}->${nums[r]}`);
            l = i
            r = i
        }
    }
    res.push(r === l ? `${nums[l]}` : `${nums[l]}->${nums[r]}`);
    return res
};

console.log(summaryRanges([0,1,2,4,5,7]));