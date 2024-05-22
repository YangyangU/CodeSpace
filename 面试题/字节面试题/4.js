// Object.prototype[Symbol.iterator] = function(){
//     return Object.values(this)[Symbol.iterator]()
// }

Object.prototype[Symbol.iterator] = function(){
    return Object.keys(this)[Symbol.iterator]()
}
var [a,b] = { a:1,b:2 }

console.log(a,b);

//打造一个迭代器
// iterator
// {
//     [Symbol.iterator]:function(){
//         return 迭代器
//     }
// }

// arr[Symbol.iterator]


function* foo(){
    yield 1
    yield 2
    yield 3
    yield 4
}

let gen = foo()  //迭代器

gen.next()