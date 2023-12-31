

var preorderTraversal = function(root) {    
    if(!root) return
    let res = [];

    res.push(root.val);
    res = res.concat(preorderTraversal(root.left));
    res = res.concat(preorderTraversal(root.right));

    return res;
};