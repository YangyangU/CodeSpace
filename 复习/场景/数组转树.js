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

function change(source){
    let map = new Map()
    let tree = []
    for(let item of source){
        if(!map.has(item.id)){
            map.set(item.id,item)
        }
    }
    console.log(map);
    for(let item of source){
        if(map.has(item.pid)){
            map.get(item.pid).children = []
            map.get(item.pid).children.push(item)
        }else{
            tree.push(item)
        }
    }
    return tree
}
console.log(change(source));//对象引用都会变化


// 将数组格式的数据转换为树形结构数据的方法
// function change(source) {
//     let res = []
//     source.forEach(item => {
//         if(item.pid === 0){
//             res.push({
//                 ...item,
//             })
//         }else{
//             let parent = source.find(item2 => item2.id === item.pid)
//             parent.children.push({
//                 ...item,
//             })
//         }
//     })
//     return res
// }

// // 将数组格式的数据转换为树形结构数据的另一种方法
// function change(obj) {
//     let map = {}
//     let res = []
//     for (let item of obj) {
//         if (!map[item.id]) {
//             map[item.id] = item
//         }
//     }
//     for (let item of obj) {
//         if (map[item.pid]) {
//             map[item.pid].children = [item]
//         } else {
//             res.push(item)
//         }
//     }
//     return res
// }
// console.log(change(source));