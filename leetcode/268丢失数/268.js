var missingNumber = function(nums) {
    let len = nums.length
  let addAll = 0
  let i=0
  while (len > i) {
    addAll = addAll + nums[i]
    i = i+1   
  }
  return (len+1)*len/2-addAll
};

//前n项和减遍历和