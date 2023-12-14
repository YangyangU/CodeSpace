nums = [1,2,3,4,5,6,7], k = 3

var rotate = function(nums, k) {
    arr = nums.slice((nums.length - k), nums.length)
    nums.splice(nums.length - k)

    console.log(nums);
    return concat(arr,nums)
};

console.log(rotate(nums, k));