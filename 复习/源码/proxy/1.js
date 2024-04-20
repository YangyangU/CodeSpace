let target = {
    name: '阳阳羊',
    age:'18',
}

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

console.log(p.name) //访问了 阳阳羊
p.name = '喜羊羊' // 修改了
