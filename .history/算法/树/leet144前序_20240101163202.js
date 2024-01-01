let root = {
    val:'A',
    left:{
        val:'B',
        left:{
            val:'D'
        },
        right:{
            val:'E'
        }
    },
    right:{
        val:'C',
        left:{
            val:'F'
        },
        right:{
            val:'G'
        }
    }
}


//递归
// var inorderTraversal = function(root) {    
//     if(!root) return []
//     let res = [];

//     res.push(root.val);
//     res = res.concat(inorderTraversal(root.left));
//     res = res.concat(inorderTraversal(root.right));

//     return res;
// };


// var inorderTraversal = function(root) {    
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


//迭代  栈的思想
var inorderTraversal = function(root) {
    if(!root) return []
    const res = [];
    const stack = [];
    if(root){
        stack.push(root);
        root = root.left;
    }

    while(stack.length){
        const top = stack.pop();
        res.push(top.val);
        if(top.right){
            stack.push(top.right);
        }
    }
    return res
}


console.log(inorderTraversal(root));