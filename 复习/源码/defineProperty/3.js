function deepProperty(obj) {
    let data = {};

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            data[key] = deepProperty(obj[key]); // 属性是对象时进行递归
        } else {
            data[key] = obj[key];
        }

        Object.defineProperty(obj, key, {
            get() {
                console.log('访问了');
                return data[key];
            },
            set(newValue) {
                console.log('修改了');
                if (typeof newValue === 'object' && newValue !== null) {
                    data[key] = deepProperty(newValue); // 对新值进行递归拦截
                } else {
                    data[key] = newValue;
                }
            }
        });
    });
    return obj;
}

let obj = {
    name: '阳阳羊',
    age: 18,
    address: {
        city: '南昌',
        street: '广兰大道'
    }
};

let propertyObj = deepProperty(obj);

console.log(propertyObj.name); // 访问了 阳阳羊
console.log(propertyObj.address.city); // 访问了 南昌

propertyObj.name = '喜羊羊'; // 修改了
propertyObj.address.city = '北京'; // 修改了

console.log(propertyObj.name); // 访问了 喜羊羊
console.log(propertyObj.address.city); // 访问了 北京