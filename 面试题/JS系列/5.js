// let a = 1
// let b = a
// a = 2

//原始类型存放在栈内

//引用类型存放在堆内

//为什么存在堆内，因为引用类型的value可以存放对象，导致占用空间变大，放在栈内可能导致爆栈

// let a = {
//     age:18
// }

// let b = a
// a.age = 20

// console.log(b);


// let a = {
//     age:18,
//     like:[1,2]
// }

// let b = Object.create(a)//继承

// console.log(b);//{}

// let b = Object.assign({},a)
// a.like.push(3)

// console.log(b);//第一层不动，后面能改


// let a = [1,2,{n:3}]
// let b = [...a]//解构//浅拷贝

// let b = [].concat(a)//浅拷贝

// let b = a.slice(0)//浅拷贝

// let a = [1,2,{n:3}]
// let a = {
//     n:1,
//     m:Symbol(2),//拷不出来
//     o:function(){},//拷不出来
//     g:undefined,//拷不出来
//     p:null,
//     // q:BigInt(123)//报错
//     k:{
//         e:3
//     }
// }
// //循环引用报错
// a.f = a.k
// a.k.e = a.f


// let b = JSON.parse(JSON.stringify(a))//深拷贝  ---不能拷贝symbol和function和undefined和null和bigint,以及循环引用

// console.log(b);


// let a = {
//     n:1,
//     // m:Symbol(2),//拷不出来
//     // o:function(){},//拷不出来
//     g:undefined,
//     p:null,
//     q:BigInt(123),
//     k:{
//         e:3
//     }
// }

// a.f = a.k
// a.k.e = a.f

// let b = structuredClone(a);

// console.log(b);



function a(){
    console.log('hello');
}

function copy(fn){
    fn = fn.toString();
    return new Function(`return ${fn}.call(this)`)
}

let foo = copy(a)
foo()