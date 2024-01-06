var binaryTreePaths = function(root) {
    if (!root) {
        return [];
    }
    var result = [];
    var helper = function(node, path) {
        if (!node.left &&!node.right) {
            path = path.toString()
            result.push(path);
            return;
        }
        if (node.left) {
            helper(node.left, path + "->" + node.left.val);
        }
        if (node.right) {
            helper(node.right, path + "->" + node.right.val);
            
        }
    }
    helper(root, root.val);
    return result;
};