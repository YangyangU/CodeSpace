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


var inorderTraversal = (root) => {
    let res = []

    var help =()=>{
        if(!node) return 

        help(node.left)
        res.push(node.val)
        help(node.right)
    }
    help(root)

    return res
};

console.log(inorderTraversal(root));