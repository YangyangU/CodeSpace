var nums = [5,7,7,8,8,10]
var target = 8

var searchRange = function(nums, target) {
    var ans=[];
    ans.push(nums.indexOf('target'));
    ans.push(nums.lastIndexOf('target'));
    return ans;
};

console.log(searchRange(target));