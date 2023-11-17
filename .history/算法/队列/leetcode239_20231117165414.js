nums = [1,3,-1,-3,5,3,6,7], k = 3

// 双指针

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

// 上面这种做法，能不能把k的复杂度去掉，在窗口移动的过程中，只根据发生变化的元素对最大值进行更新。


//双端队列有利于维护一个递减队列
var maxSlidingWindow = function(nums, k) {
    let len = nums.length;
    let res = []
    let deque = []
    for (let i = 0; i < len; i++) {
        while(deque.length && deque[deque.length - 1] < nums[i]){  //数组下标为-1会报错所以判断deque.length不为零
            deque.pop()
        }        
        deque.push(nums[i])//如果满足递减，则进队。
        if(i >= k - 1){//到达窗口宽度，记录最大值
            res.push(deque[0])
        }
    }
    return res
};


console.log(maxSlidingWindow(nums, k));
