
//递归
var searchBST = function(root, val) {
    if (root == null || root.val == val) return root;
    return root.val < val ? searchBST(root.right,val) : searchBST(root.left,val)
};

//迭代
var searchBST = function(root, val) {
    while (root != null || root.val != val){
        root = val < root.val ? root.right : root.left;
    }
    return root
};