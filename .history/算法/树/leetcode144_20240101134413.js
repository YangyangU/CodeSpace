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


//迭代  栈的思想
var preorderTraversal = function(root) {
    if(!root) return []
    const res = [];
    const stack = [];
    stack.push(root);

    while(stack.length){
        const top = stack.pop();
        res.push(top.val);
        if(top.right){
            stack.push(top.right);
        }
        if(top.left){
            stack.push(top.left);
        }
    }
    return res
}


console.log(preorderTraversal(root));