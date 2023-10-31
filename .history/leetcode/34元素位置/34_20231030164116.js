var searchRange = function(nums, target) {
    var ans=[];
    ans.push(nums.indexOf('target'));
    ans.push(nums.lastIndexOf('target'));
    return ans;
};