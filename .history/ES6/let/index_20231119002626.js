
// var a = 1
// console.log(a);


// console.log(a);
// let a = 1


console.log(a);
const a = 1
let a = 1//有没有没关系
if(true){
    console.log(a);//暂时性死区
    let a = 2;//隐匿了
}


//不能重复定义 const也是一样
// let a = 1
// let a = 2
// console.log(a);//TypeError: Assignment to constant variable


// var a = 2
// console.log(window.a);//2

// let a = 2
// console.log(window.a);//undefined


// const a = 1
// a = 2
// console.log(a);//TypeError: Assignment to constant variable.



// const obj = {
//     name: '阳阳'
// }
// obj.name = '欣欣'

// console.log(obj);//存在堆