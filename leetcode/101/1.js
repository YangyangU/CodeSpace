var isSymmetric = function(root) {
    if (!root) return true;
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
        return isSameTree(p.left, q.right)&&isSameTree(p.right, q.left);
    };
    return isSameTree(root.left, root.right);
};