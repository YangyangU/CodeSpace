function getKey(obj){
    let arr = []
    for(let key in obj){
        arr.push(key)
        if(typeof obj[key] === 'object' && obj[key] !== null){
            arr = arr.concat(getKey(obj[key]))
        }
    }
    return arr
}

function isSame(obj,str){
    let arr1 = str.split('.')
    let arr2 = getKey(obj)
    return JSON.stringify(arr1) === JSON.stringify(arr2) ? 1 : undefined
}

let obj = {
    a:{
        b:{
            c:1
        }
    }
}

let str = 'a.b.c'

console.log(isSame(obj,str));