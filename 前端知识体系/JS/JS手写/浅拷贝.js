const shallowClone=(obj)=>{
    let cloneObj = Array.isArray(obj) ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            cloneObj[key] = obj[key]
        }
    }
    return cloneObj
}

let a = {
    name: 'xyy',
    addr: {
        street: '大纱帽胡同'
    }
}
let b = shallowClone(a)
b.addr.street = '南锣鼓巷'

console.log(a.addr.street);
console.log(b.addr.street);