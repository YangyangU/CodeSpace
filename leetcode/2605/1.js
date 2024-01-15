var minNumber = function(nums1, nums2) {
    nums1 = nums1.sort((a,b)=>a-b)
    nums2 = nums2.sort((a,b)=>a-b)
    for(var i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])){
            return nums1[i]
        }
    }
    return nums1[0] >= nums2[0] ? nums1[0]+nums2[0]*10 : nums1[0]*10 + nums2[0]
};