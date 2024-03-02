// function* foo(){
//     // let a = 0
//     // yield a = 1
//     // yield a = 2
//     // console.log(a);
// }

// let gen = foo()
// console.log(gen);//Object [Generator] {}
// console.log(gen.next());//{ value: 1, done: false }


// function* foo(){
//     yield 'a'
//     yield 'b'
//     yield 'c'
//     return 'ending'
// }
// let gen = foo()//得到一个generator实例对象
// console.log(gen);//Object [Generator] {}
// console.log(gen.next());//{ value: 'a', done: false }
// console.log(gen.next());//{ value: 'b', done: false }
// console.log(gen.next());//{ value: 'c', done: false }
// console.log(gen.next());//{ value: 'ending', done: true }//流程执行完毕
// console.log(gen.next());//{ value: undefined, done: true }

//没有return也没关系，他知道自己执行完毕与否，return后面yield不会生效


function* g(){
    var o = 1
    yield o++
    // yield //没值就是undefined
    yield o++
    yield o++
}

let gen = g()//得到一个generator实例对象
console.log(gen.next());//{ value: 1, done: false }
let gener = g()//重新得到一个新的实例对象，互不关联
console.log(gener.next());//{ value: 2, done: false }
console.log(gen.next());//{ value: 3, done: false }