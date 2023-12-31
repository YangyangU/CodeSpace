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

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}