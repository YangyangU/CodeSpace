

var preorderTraversal = function(root) {    
    if(!root) return
    const res = [];

    res.push(root.val);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
    return res;
};