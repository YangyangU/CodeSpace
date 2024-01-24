

var isBalanced = function (root) {
    function getHeight(node) {
        if (node === null) return 0;
        const leftH = getHeight(node.left);
        if (leftH === -1) return -1; // 提前退出，不再递归
        const rightH = getHeight(node.right);
        if (rightH === -1 || Math.abs(leftH - rightH) > 1) return -1;
        return Math.max(leftH, rightH) + 1;
    }
    return getHeight(root) !== -1;
};
