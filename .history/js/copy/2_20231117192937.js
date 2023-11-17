let a ={
    name: '阳阳',
}
//让b继承a
let b = Object.create(a)

console.log(b);
console.log(b.name);