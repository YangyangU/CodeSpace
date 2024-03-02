function* g(){
    let a = 1 
    let b = yield a++
    console.log(b);
    let c = yield a++
}
let gen = g()

console.log(gen.next());//1 读取到1，a++执行
console.log(gen.next(2));//2 logb打印，值为参数2，读取到a的值2，a++执行 //next可以接收参数，用于指定被我触发的yield的结果
console.log(gen.next());//un 


function* g(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    return 6
}

for( let val of gen()){
    console.log(val);
}