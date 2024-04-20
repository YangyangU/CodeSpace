let target = [1, 2, 3]

let handler = {
    get(obj, key) {
        console.log('访问了')
        return key in obj ? obj[key] : null
    },
    set(obj, key, val) {
        console.log('修改了')
        obj[key] = val
        return true
    }
}
const p = new Proxy(target, handler)
console.log(p) // [ 1, 2, 3 ]
console.log(p[0]) // 访问了 1
console.log(p[3]) // 访问了 null
p[0] = 11 // 修改了
// p.push(4) // 访问了 访问了 修改了 修改了
// console.log(p) // [ 11, 2, 3, 4 ]
p.pop() //访问了 访问了 访问了 修改了
// console.log(p); // [ 11, 2 ]

