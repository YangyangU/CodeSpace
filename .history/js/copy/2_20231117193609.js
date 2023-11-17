// let a ={
//     name: '阳阳',
// }
// //让b继承a
// let b = Object.create(a)

// a.name = '欣欣'//改变a

// console.log(b);//{}

// console.log(b.name);//阳阳 //原型上找到了 //b也改了 //浅拷贝


let a = {
    name : '阳阳',
    like :{
        n:'玩'
    } 
}
let b = Object.assign({},a)
a.name = '欣欣'//改变a
console.log(b);//b不受影响 //深拷贝
