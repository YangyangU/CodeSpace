nums = [1,3,-1,-3,5,3,6,7], k = 3

//双指针

var maxSlidingWindow = function(nums, k) {
    let left = 0
    let right = k - 1
    let res = []
    while (right < nums.length) {
        const max = calMax(left, right)
        res.push(max)
        left ++;
        right ++;
    }
};

console.log(maxSlidingWindow(nums, k));