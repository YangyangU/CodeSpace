root = [1,null,2,3]


//递归
// var preorderTraversal = function(root) {    
//     if(!root) return []
//     let res = [];

//     res.push(root.val);
//     res = res.concat(preorderTraversal(root.left));
//     res = res.concat(preorderTraversal(root.right));

//     return res;
// };


// var preorderTraversal = function(root) {    
//     let res = [];
//     function help(node){
//         if(!node) return

//         res.push(node.val);
//         help(node.left);
//         help(node.right);
//     }
//     help(root);
//     return res;
// };


//迭代
var preorderTraversal = function(root) {
    const res = [];
    const stack = [];
    stack.push(root);

    while(stack.length){
        const top = stack.pop();
        res.push(top.val);
    }
    return res
}


console.log(preorderTraversal(root));