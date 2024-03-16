let obj = {
    a: 1,
    b: {
        n: 2
    }
}


function deepCopy(obj) {
    let objClone = Array.isArray(obj) ? [] : {}
    for (let key in obj) {//obj.key 与 obj[key] 前者加键为key,后者键为值
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                objClone[key] = deepCopy(obj[key])
            } else {
                objClone[key] = obj[key]
            }
        }
    }
    return objClone
}

console.log(deepCopy(obj));