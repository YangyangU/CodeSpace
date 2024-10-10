source = [{
    id: 1,
    pid: 0,
    name: 'body',
}, {
    id: 2,
    pid: 1,
    name: 'title',
}, {
    id: 3,
    pid: 2,
    name: 'div',
}]

const fn = (arr) => {
    let map = {}
    let res = []
    arr.forEach(item => {
        map[item.id] = { ...item, children: [] }
    });
    arr.forEach(item =>{
        let node = map[item.id]
        if(node.pid === 0){
            res.push(node)
        }else{
            map[item.pid].children.push(node)
        }
    })
    return res
}

console.log(fn(source));
