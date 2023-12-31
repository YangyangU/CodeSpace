

var preorderTraversal = function(root) {
    if(!root) return
    console.log(root.val);
    preorderTraversal(root.left);
};