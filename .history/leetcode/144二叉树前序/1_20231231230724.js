

var preorderTraversal = function(root) {
    const res = [];
    if(!root) return
    console.log(root.val);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
};