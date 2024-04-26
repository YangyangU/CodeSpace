var levelOrderBottom = function(root) {
    if(!root) return []
    let res = []
    let q = [root]
    while(q.length){
        let len = q.length
        let arr = []
        for(let i = 0; i < len; i++){
            let node = q.shift()
            arr.push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
            res.unshift(arr)
        }
    }
    return res
};

