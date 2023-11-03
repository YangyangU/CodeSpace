nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

var merge = function(nums1, m, nums2, n) {
    if (m == 0 && n == 0){return ans}
    for (var i=m-1; i>=0; i--) {
        if(nums1[i] == 0){
            nums1.pop();
        }
    }
    for (var j=0; j<n; j++) {
        nums1.push(nums2[j]);
    }
    nums1.sort(function(a,b){return a-b})
    return nums1;
}

console.log(merge(nums1,m, nums2,n));






// if (m == 0 && n == 0){
//     return [];
// }
// for(var k = 0; k <nums2.lengthm-1; k++) {
//     nums1.push(nums2[k])
// }
// nums1.sort((a,b)=>a-b);
// for(var i =0;i< nums1.length -1;i++){
//     while (nums1[0] == 0) {
//         nums1.shift();
//     }
// }
// return nums1