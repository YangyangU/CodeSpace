let obj = {
    a: 1,
    b: undefined,
    c: {
        n: 2
    }
}
Object.defineProperty(obj,'d',{
    enumerable: false,
    value:3,
    writable: false,
    configurable: false
})


console.log(obj.d);
function hasProperty(obj, key) {
    // return obj[key] !== undefined        //为undefined就判断不了
    // return Object.keys(obj).includes(key)//拿到所有的key并存在数组中返回 //不可枚举就判断不了
    // return obj.hasOwnProperty(key)  //可以判断不可枚举的属性
    return key in obj
}

console.log(hasProperty(obj, 'd'));//false //enumerable: false 不可枚举 Object.keys(obj)无法枚举