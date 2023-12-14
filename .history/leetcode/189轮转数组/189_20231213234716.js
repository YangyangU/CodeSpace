nums = [1,2,3,4,5,6,7], k = 3

var rotate = function(nums, k) {
    // var arr = nums.slice((nums.length - k), nums.length)
    // nums.splice(nums.length - k)
    // var res = arr.concat(nums)
    // // res=(arr.join('')+nums.join('')).split('')
    // return res


    //取模 删除-k~k的元素，解构拼接到前面
    // return nums.splice(0, 0, ...nums.splice(-(k %= nums.length), k));
};

console.log(rotate(nums, k));