const tree = {
    val: 1,
    children: [
        {
            val: 2,
            children: [
                {
                    val: 3,
                    children: [
                        {
                            val: 4,
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            val: 5,
            children: [
                {
                    val: 6,
                    children: []
                },
                {
                    val: 7,
                    children: []
                }
            ]
        }
    ]
}

function deep(tree) {
    let max = 0;
    for (let i = 0; i < tree.children.length; i++) {
        let depth = deep(tree.children[i]);
        max = Math.max(max, depth);
    }
    return max + 1;
}

function deep1(tree){
    let res = [1]
    function dfs(tree){
        for(let i = 0; i < tree.children.length; i++){
            res.push(tree.children[i].val)
            if(tree.children[i].children.length > 0){
                dfs(tree.children[i])
            }
        }
    }
    dfs(tree)
    return res
}

function beep(tree){
    let res = []
    let queue = [tree]
    while(queue.length > 0){
        let node = queue.shift()
        res.push(node.val)
        if(node.children.length > 0){
            queue.push(...node.children)
        }
    }
    return res
}

console.log(beep(tree));