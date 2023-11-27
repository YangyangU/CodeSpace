//前言
// let a = 1

// let b = a //传值 //深拷贝

//  b= 2

// console.log(a);//1


let obj = {
    age:18
}
let obj2 = obj//浅拷贝
obj2.age = 20

console.log(obj.age);//20