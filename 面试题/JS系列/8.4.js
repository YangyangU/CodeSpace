let obj = {
    name: 'Tom',
    age:18,
    like:[1,2,3]
}

let obj2 = Object.create(obj)
obj2.name = 'Jerry'
// obj2.like.push(4)

console.log(obj2)