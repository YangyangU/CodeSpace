Object.prototype[Symbol.iterator] = function(){
    return Object.values(this)[Symbol.iterator]()
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