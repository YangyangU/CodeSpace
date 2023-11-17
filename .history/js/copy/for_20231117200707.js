let arr = ['a', 'b', 'c', 'd', 'e']

// 有迭代器属性的才能用
// for (let item of arr) {
//     console.log(item);
// }

let obj = {
    name:'阳阳',
    age:18,
    like:{
        type:'coding'
    }
}

for (let key in obj){//for in 专门遍历对象
    console.log(key);
}