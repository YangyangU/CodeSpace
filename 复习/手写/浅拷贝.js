function shallowCopy(obj){
    let newObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        newObj[key] = obj[key]
    }
    return newObj
}

// 测试
const obj1 = {
    name: '张三',
    age: 20,
    hobbies: ['篮球', '足球', '游泳'],
    address: {
        province: '四川',
        city: '成都'
    }
}

const obj2 = shallowCopy(obj1);
obj2.address.city = '重庆';
console.log(obj1.address.city); // 重庆
console.log(obj2.address.city); // 重庆