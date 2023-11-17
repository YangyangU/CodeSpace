//手动实现一个深拷贝
let obj = {
    name:'阳阳',
    age:18,
    like:{
        type:'coding'
    }
}

function deepCopy(obj) {
    let objCopy = {}
    for (let key in obj) {
        if(obj[key] instanceof Object) {

        }else{
            objCopy[key] = obj[key]
        }
    }    
}