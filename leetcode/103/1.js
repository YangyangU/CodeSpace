function maxDepth(root) {
    if(!root) return 0
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1
}

// 当前节点 的最大深度等于左右子树最大深度加一