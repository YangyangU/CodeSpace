let tree = {
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

//先序遍历
function preorder(root){
    if(!root) return
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}
preorder(tree)

//中序遍历


//后序遍历