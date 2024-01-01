
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
    if(!root.val) return

    res = [];

    var help(node){
        postorderTraversal(node.right)
        postorderTraversal(node.left)
        res.push(node.val)
    }
    help(root)
    return res
};


console.log(postorderTraversal(root));