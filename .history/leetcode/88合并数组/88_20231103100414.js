nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

var merge = function(nums1, m, nums2, n) {
    ans=[];
    if (m == 0||n == 0){
        return ans;
    }
    for(var i = nums1.length -1; i >0; i--){
        if (nums1[i] == 0) {
            nums1[i].push();
        }
    }
};