let target = {
    name: '阳阳羊',
    age:'18',
    address:{
        city:'南昌',
    }
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

console.log(p.address.city) //访问了 南昌
p.address.city = '北京' // 访问了
console.log(p.address.city) // 访问了 北京