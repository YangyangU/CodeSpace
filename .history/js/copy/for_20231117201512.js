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

// for (let item of obj) { //for of不能遍历对象
//     console.log(item);//obj is not iterable
// }

// for (let key in obj){//for in 专门遍历对象
//     console.log(key);
//     console.log(obj[key]);
// }
// for (let key in arr){//for in 专门遍历对象 也能遍历数组
//     console.log(key);
// }

let data = Object.create(obj)//能不能遍历到隐式原型
data.sex = 'boy'
for (let key in data){
    // console.log(key);//name age like
    // console.log(obj[key]);//阳阳 18 { type: 'coding' }
    if(data.hasOwnProperty(key)){
        
    }
}