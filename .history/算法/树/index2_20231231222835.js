let tree = {
    val:'A',
    left:{
        var:'B',
        left:{
            val:'D'
        },
        right:{
            val:'E'
        }
    },
    right:{
        var:'C',
        left:{
            val:'F'
        },
        right:{
            val:'G'
        }
    }
}

function preorder(root){
    if(!root) return
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}


preorder(tree)