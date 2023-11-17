//前言
// let a = 1

// let b = a //传值

// a = 2

// console.log(b);//1


let obj = {
    age:18
}
let obj2 = obj//浅拷贝
obj.age = 20

console.log(obj2.age);//20