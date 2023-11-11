
// var a = 1
// console.log(a);


// let a = 1//有没有没关系
// if(true){
//     console.log(a);//暂时性死区
//     let a = 2;//隐匿了
// }


//不能重复定义 const也是一样
// let a = 1
// let a = 2
// console.log(a);


var a = 2
console.log(window.a);//

let a = 2
console.log(window.a);//undefined