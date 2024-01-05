
function sortedArrayToBST(nums) {
    // 辅助函数，用于递归构建二叉搜索树
    function helper(left, right) {
      if (left > right) {
        return null;
      }
  
      // 选择中间元素作为根节点
      const mid = Math.floor((left + right) / 2);
      const root = new TreeNode(nums[mid]);
  
      // 递归构建左右子树
      root.left = helper(left, mid - 1);
      root.right = helper(mid + 1, right);
  
      return root;
    }
  
    // 调用辅助函数，传入数组的边界索引
    return helper(0, nums.length - 1);
  }