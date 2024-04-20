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

function Observer(target,handler){
    // 递归地为对象的每个属性创建代理
    for (const key of Object.keys(target)) {
        if (target[key] && typeof target[key] === 'object') {
            target[key] = Observer(target[key], handler);
        }
    }
    return new Proxy(target, handler);
}

const p = Observer(target, handler);

console.log(p.address.city) //访问了 访问了 南昌
p.address.city = '北京' // 访问了 修改了
console.log(p.address.city) // 访问了 访问了 北京

