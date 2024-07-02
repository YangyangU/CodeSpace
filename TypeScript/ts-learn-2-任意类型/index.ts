// let a:number = 999
// console.log(a);


// any 任意类型 nuknown
// 1. top type 顶级类型 any known
// 2. object
// 4. number string boolean
// 5. 1 'abc' false
// 6. never

// let a:any = 123

// 1. unknown 只能赋值给自身或者any
// let a:unknown = 1

// let b:any = 5

// a = b
// b = a
//2. unknown 没办法读任何属性 方法也不可以调用
let a:unknown = {handsome:true,say:()=>console.log(123)}
let b:any = {handsome:true,say:()=>console.log(123)}

// a.say()
b.say()