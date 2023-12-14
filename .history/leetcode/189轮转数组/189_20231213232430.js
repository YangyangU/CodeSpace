nums = [1,2,3,4,5,6,7], k = 3

var rotate = function(nums, k) {
    arr = nums.slice((nums.length - k), nums.length)
    console.log(nums);
    return arr
};

console.log(rotate(nums, k));