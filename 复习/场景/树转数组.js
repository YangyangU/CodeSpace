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
    let res = []
    function dfs(node){
        res.push({ val: node.val });
        if (node.children && node.children.length > 0) {
            node.children.forEach(child => dfs(child));
        }
    }
    dfs(tree)
    return res
}

console.log(deep1(tree));