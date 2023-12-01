nums = [4,5,6,7,0,1,2], target = 0

let min
var search = function(nums, target) {
    for (let i = 0; i< nums.length; i++) {
        min = Math.min(min,nums[i])
       
    }
};

console.log(search(nums,target));


// var search = function(nums, target) {
//     return nums.indexOf(target)
// };