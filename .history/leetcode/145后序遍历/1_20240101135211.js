
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


var postorderTraversal = function(root) {
    if(!root) return

    res = [];

    var help = (node)=>{
        help(node.right)
        help(node.left)
        res.push(node.val)
    }
    help(root)
    return res
};


console.log(postorderTraversal(root));