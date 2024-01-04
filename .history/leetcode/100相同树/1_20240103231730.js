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
    if(p.val === q.val){
        return true;
    }
    if(p.left !== q.left){
        return false;
    }
};

console.log(isSameTree(p,q));