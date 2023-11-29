// let a ={
//     name: '阳阳',
// }
// //让b继承a
// let b = Object.create(a)

// a.name = '欣欣'//改变a

// console.log(b);//{}

// console.log(b.name);//阳阳 //原型上找到了 //b也改了 //浅拷贝


// let a = {
//     name : '阳阳',
//     like :{
//         first:'playing',
//         second:'coding'
//     } 
// }
// let b = Object.assign({},a)
// a.name = '羊羊'
// a.like.first = 'coding' //改变这个受影响，浅拷贝
// console.log(b); //{ name: '阳阳', like: { n: 'play' } } b也改变


let arr = [1,2,3,{a:10}]
let newArr = [].concat(arr)

arr.push(4) //改变arr newArr不变
arr[0] = 10 //改变arr newArr不变
arr[3].a = 100 //改变arr newArr变
console.log(newArr); //浅拷贝

// slice
// let newArr = arr.slice(0)
// arr[3].a = 100 //改变arr newArr变
// console.log(newArr); //浅拷贝


//...
// let newArr = [...arr]
// arr[3].a = 100 //改变arr newArr变
// console.log(newArr);//浅拷贝


//toReversed().reverse()
// let newArr = arr.toReversed().reverse()//toReversed新增的调转方法，不会影响原函数，但是reverse会改变原数组
// arr[3].a = 100 //改变arr newArr变
// console.log(newArr);//浅拷贝


//->for.js