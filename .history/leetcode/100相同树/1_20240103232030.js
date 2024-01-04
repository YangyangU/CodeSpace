let p = {
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

let q = {
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

var isSameTree = function(p, q) {
    if(p== null && q== null){
        return true;
    }
    if(p== null || q== null){
        return false;
    }
    if(p.val !== q.val){
        return false;
    }
    return isSameTree(p.left, q.left)&&isSameTree(p.right, q.right);
};

console.log(isSameTree(p,q));