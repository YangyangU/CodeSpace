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
// var inorderTraversal = (root) => {
//     let res = []

//     var help =(node)=>{
//         if(!node) return 

//         help(node.left)
//         res.push(node.val)
//         help(node.right)
//     }
//     help(root)

//     return res
// };


//迭代
var inorderTraversal = (root) => {

};
console.log(inorderTraversal(root));