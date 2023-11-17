// nums = [1,3,-1,-3,5,3,6,7], k = 3

//双指针


// 时间复杂度k*n
// var maxSlidingWindow = function(nums, k) {
//     let left = 0
//     let right = k - 1
//     let res = []
//     while (right < nums.length) {
//         const max = calMax(left, right)
//         res.push(max)
//         left ++;
//         right ++;
//     }
//     function calMax(left, right) {
//         let max = -Infinity
//         for (let i = left; i <= right;i++){
//             if(nums[i] > max){
//                 max = nums[i]
//             }
//         }
//         return max
//     }
//     return res
// };


nums = [1,3,-1,-3,5,3,6,7], k = 3


var maxSlidingWindow = function(nums, k) {
    let len = nums.length;
    let res = []
    let deque = []
    for (let i = 0; i < len; i++) {
        while(deque.length && nums[deque[deque.length - 1]] <= nums[i]){  //数组下标为-1会报错所以判断deque.length不为零
            deque.pop()
        }        
        // deque.push(nums[i])//如果满足递减，则进队
        deque.push(i)//不存值，存下标

        //队头元素是不是已经出窗口了，如果超出窗口长度，将原来的队头即最大元素下标出队
        if(deque[0] <= i - k){
            deque.shift()
        }


        if(i >= k - 1){//到达窗口宽度，记录最大值
            res.push(nums[deque[0]])
        }
    }
    return res
};


console.log(maxSlidingWindow(nums, k));