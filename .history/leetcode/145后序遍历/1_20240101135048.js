
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
        postorderTraversal(root.right)
        postorderTraversal(root.left)
        res.push(root.val)
    }
    return res
};


console.log(postorderTraversal(root));