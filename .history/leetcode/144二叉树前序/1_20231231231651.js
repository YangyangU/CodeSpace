root = [1,null,2,3]

// var preorderTraversal = function(root) {    
//     if(!root) return []
//     let res = [];

//     res.push(root.val);
//     res = res.concat(preorderTraversal(root.left));
//     res = res.concat(preorderTraversal(root.right));

//     return res;
// };


var preorderTraversal = function(root) {    
    let res = [];
    function help(node){
        if(!root) return

        res.push(node.val);
        help(node.left);
        help(node.right);
    }
    help(root);
    return res;
};


console.log(preorderTraversal(root));