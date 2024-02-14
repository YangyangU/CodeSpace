var lowestCommonAncestor = function(root, p, q) {
    if(!root) return
    if (root.left == p && root.right == q){
        return root.val
    }
    lowestCommonAncestor(root.left,p,q)
    lowestCommonAncestor(root.right,p,q)
};

var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;

    // 如果当前节点是 p 或者 q，说明找到了一个目标节点
    if (root === p || root === q) {
        return root;
    }

    // 分别在左子树和右子树中查找 p 和 q
    var leftNode = lowestCommonAncestor(root.left, p, q);
    var rightNode = lowestCommonAncestor(root.right, p, q);

    // 如果 p 和 q 分别位于 root 的左右子树中，则 root 是最近公共祖先
    if (leftNode && rightNode) {
        return root;
    }

    // 否则，如果其中一个节点存在于子树中，则那个子树的根节点就是最近公共祖先
    return leftNode !== null ? leftNode : rightNode;
};