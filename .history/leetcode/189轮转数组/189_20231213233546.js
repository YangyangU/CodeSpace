nums = [1,2,3,4,5,6,7], k = 3

var rotate = function(nums, k) {
    arr = nums.slice((nums.length - k), nums.length)
    nums.splice(nums.length - k)
    res = arr.concat(nums)
    // res=(arr.join('')+nums.join('')).split('')
    return res
};

console.log(rotate(nums, k));