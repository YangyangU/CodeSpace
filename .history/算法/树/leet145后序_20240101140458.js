//后序遍历 左右根

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
var postorderTraversal = function(root) {

    res = [];

    var help = (node)=>{

        if(!node) return

        help(node.left)
        help(node.right)
        res.push(node.val)
    }
    help(root)
    return res
};

//迭代
console.log(postorderTraversal(root));