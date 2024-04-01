// 转换前：
source = [{
    id: 1,
    pid: 0,
    name: 'body'
}, {
    id: 2,
    pid: 1,
    name: 'title'
}, {
    id: 3,
    pid: 2,
    name: 'div'
}]

function change(obj) {
    let map = {}
    let res = []
    for (let item of obj) {
        if (!map[item.id]) {
            map[item.id] = item
        }
    }
    for (let item of obj) {
        if (map[item.pid]) {
            map[item.pid].children = [item]
        } else {
            res.push(item)
        }
    }
    return res
}
console.log(change(source));
