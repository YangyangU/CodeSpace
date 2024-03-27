

// function a(next){
//     setTimeout(()=>{
//         console.log('a完成');
//         next()
//     },1000)
// }

// function b(next){
//     setTimeout(()=>{
//         console.log('b完成');
//         next()
//     },500)
// }

// function run(fn){
//     let gen = fn()
//     function next(err,data){
//         let result = gen.next(data)
//         if(result.done) return
//         result.value(next)
//     }
//     next()
// }

// function* g(){
//     yield a
//     yield b
// }

// run(g)


const co = require('co');

function a(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('a完成');
            resolve()
        },1000)
    })
}

function b(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('b完成');
            resolve()
        },500)
    })
}

function* g(){
    yield a()
    yield b()
}

co(g)

// const gen = g();
// const p1 = gen.next().value;
// p1.then(res => {
//     const p2 = gen.next(res).value;
//     p2.then(res => {
//         gen.next(res);
//     });
// });