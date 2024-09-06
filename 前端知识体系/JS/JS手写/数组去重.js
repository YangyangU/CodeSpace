// Set
const uniqueArr = (arr) => [...new Set(arr)]
console.log(uniqueArr([1, 2, 2, 3, 4, 4, 5]));


// Filter + indexOf
const uniqueArr2 = (arr) => {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}
console.log(uniqueArr2([1, 2, 2, 3, 4, 4, 5]));

// Map
const uniqueArr3 = (arr) => {
    const map = new Map();
    arr.forEach((item) => {
        map.set(item, true);
    })
    return Array.from(map.keys())
}
console.log(uniqueArr3([1, 2, 2, 3, 4, 4, 5]));

// 对象数组去重

const arr = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Charlie' }
];

 //针对属性去重 && 可以添加属性
const uniqueArr4 = (arr) => {
    return arr.reduce((pre, cur) => {
        const isExist = pre.some((item) => {
            return item.name === cur.name;
        })
        if (!isExist) {
            pre.push(cur);
        }
        return pre;
    }, []);
}
console.log(uniqueArr4(arr));

 // 整个对象去重
const uniqueArr5 = (arr) => {
    return arr.reduce((pre, cur) => {
        const isExist = pre.some((item) => {
            return JSON.stringify(item) === JSON.stringify(cur);
        })
        if (!isExist) {
            pre.push(cur);
        }
        return pre;
    }, []);
}
console.log(uniqueArr5(arr));

 //简单
const uniqueArr6 = (arr) => {
    const newArr = arr.map(item => JSON.stringify(item))
    return Array.from(new Set(newArr),(item) => JSON.parse(item))
}
console.log(uniqueArr6(arr));