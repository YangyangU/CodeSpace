
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

    res = [];

    var help = (node)=>{

        if(!root) return

        help(node.right)
        help(node.left)
        res.push(node.val)
    }
    help(root)
    return res
};


console.log(postorderTraversal(root));