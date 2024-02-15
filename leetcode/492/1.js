//单调栈

var nextGreaterElement = function(nums1, nums2) {
    let res = []
    let stack = []
    let map = new Map()
    for (let i = 0; i < nums2.length; i++) {
        while(stack.length > 0 && stack[stack.length - 1] < nums2[i]){
            map.set(stack.pop(), nums2[i])
        }
        stack.push(nums2[i])
    }
    for(let i = 0; i < nums1.length; i++){
        res.push(map.get(nums1[i]) || -1)
    }
    return res
};
