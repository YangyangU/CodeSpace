root = [5,4,6,null,null,3,7]

//只比较了当前节点
// 只判断min；当 min 为 null、undefined、0、false 或空字符串 都走不通
//还是要用min !== null


var isValidBST = function(root) {
    if (root == null) return true;
    function help(node,min,max) {
        if (node == null) return true;
        if((min !== null && node.val <= min)||(max !== null && node.val >= max)){
            return false;
        }
        return help(node.left,min,node.val) && help(node.right,node.val,max);
    }
    return help(root,null,null);
};


var isValidBST = function(root) {
    function help(node, min, max) {
        if (node == null) return true;
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }
        return help(node.left, min, node.val) && help(node.right, node.val, max);
    }
    return help(root, null, null);
};
