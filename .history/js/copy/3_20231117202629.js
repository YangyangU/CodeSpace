//浅拷贝的实现原理
let obj = {
    name:'阳阳',
    age:18,
    like:{
        type:'coding'
    }
}

function shalldowCopy(obj) {
    let objCopy = {}
    for (let key in obj) {
        if(obj.hasOwnProperty(key)){
            objCopy[key] = obj[key]
        }
    }
    return objCopy
}
let newObj = shalldowCopy(obj)

obj.age = 18
obj.like.type = 'coding'

console.log(newObj);