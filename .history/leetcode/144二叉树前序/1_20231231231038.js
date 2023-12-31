

var preorderTraversal = function(root) {    
    if(!root) return
    const res = [];

    res.push(root.val);
    res = res.concat(preorderTraversal(root.left));
    res = res.concat(preorderTraversal(root.right));

    return res;
};