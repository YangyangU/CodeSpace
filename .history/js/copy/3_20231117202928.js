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

obj.age = 18//修改值
obj.like.type = 'swimming'//修改址 受影响

console.log(newObj);//浅拷贝



//拷贝数组
let arr = ['a',{n:1},1,undefined,null]



let newArr = shalldowCopy(arr)