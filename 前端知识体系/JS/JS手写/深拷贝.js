// 序列化
const deepClone = (obj)=>{
    return JSON.parse(JSON.stringify(obj))
}
let a = {
    name: 'xyy'
}
let b = deepClone(a)
b.name = 'jyx'

console.log(a.name);
console.log(b.name);

// 递归
const deepClone2 =(obj)=>{
    let deepObj = Array.isArray(obj) ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            typeof obj[key] === 'object' ? deepObj = deepClone2(obj[key]) : deepObj[key] = obj[key]
        }
    }
    return deepObj
}

const deepClone3 = (obj)=>{
    const newObj = Array.isArray(obj) ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] === 'object' && obj[key] !== null){
                newObj = deepClone3(obj[key])
            }else {
                newObj[key] = obj[key]
            }
        }
    }
    return newObj
}

let a2 = {
    name: 'xyy'
}
let b2 = deepClone3(a2)
b2.name = 'jyx'

console.log(a2.name);
console.log(b2.name);