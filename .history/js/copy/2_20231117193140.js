let a ={
    name: '阳阳',
}
//让b继承a
let b = Object.create(a)

a.name = '欣欣'

console.log(b);//{}

console.log(b.name);//阳阳 //原型上找到了