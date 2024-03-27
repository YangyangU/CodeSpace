// function* g(a){
//     const b = 2 * (yield(a-1))
//     const c = yield(b / 4)
//     return (a - b + c)
// }

// const gen = g(2)//生成对象
// console.log(gen.next());//{value: 1, done: false}
// console.log(gen.next(6));//yield被赋值为6//{value: 3, done: false}
// console.log(gen.next(3));//2-12+3//{value: -7, done: true}

function* foo() {
    const res1 = yield async1();
    console.log(res1);
    const res2 = yield async2();
    console.log(res2);
}
function async1() {
    return new Promise(resolve => {
        setTimeout(() => resolve('异步1完成'), 1000);
    });
}
function async2() {
    return new Promise(resolve => {
        setTimeout(() => resolve('异步2完成'), 500);
    });
}

const gen = foo();
const p1 = gen.next().value;
p1.then(res => {
    const p2 = gen.next(res).value;
    p2.then(res => {
        gen.next(res);
    });
});