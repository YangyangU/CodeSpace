

var preorderTraversal = function(root) {    
    if(!root) return
    const res = [];

    console.log(root.val);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
};