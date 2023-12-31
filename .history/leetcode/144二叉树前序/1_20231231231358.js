root = [1,null,2,3]

var preorderTraversal = function(root) {    
    if(!root) return []
    let res = [];

    res.push(root.val);
    res = res.concat(preorderTraversal(root.left));
    res = res.concat(preorderTraversal(root.right));

    return res;
};


var preorderTraversal = function(root) {    
    if(!root) return []
    let res = [];

    res.push(root.val);
    preorderTraversal(root.left);
    preorderTraversal(root.right);

    return res;
};


console.log(preorderTraversal(root));