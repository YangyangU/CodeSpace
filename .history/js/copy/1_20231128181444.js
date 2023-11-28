//前言
// let a = 1

// let b = a //传值 //深拷贝

//  a= 2

// console.log(b);//1


// let obj = {
//     age:18
// }
// let obj2 = obj//浅拷贝
// obj2.age = 20

// console.log(obj.age);//20


let obj = {
    age: 18, 
    info: {
        name: '阳阳',
        city: 'New York' 
    } 
};

let obj2 = obj //拷贝一份 obj
obj.age = 20  //修改 obj2 的 age 属性值
obj.info.name = '羊羊'  //修改 obj2 的 info 属性的 name 属性值

console.log(obj.age); //20  obj属性值改变
console.log(obj.info.name); //20  obj属性值改变