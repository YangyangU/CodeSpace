
// //原始数据类型
// let a = 'hello';
// let b = 123;
// let c = true;
// let u = undefined;
// let n = null;

// //引用类型
// let obj = {
//     name: '阳阳'
// }


// let a = 1;
// let b = a;
// a = 2;
// console.log(b);


//引用类型不能放在调用栈里面
//开辟新的空间——堆，来存放，内存非常大
let obj = {
    name: '阳阳'
}
let lw =obj;
obj.name = '欣欣'
console.log(lw.name);
// 对象可以存放各种数据，会很大，不会放在调用栈，V8会开辟一个堆来存放引用类型，堆也是一种数据结构，堆的占用内存是很大的
// obj在词法中，存放堆的地址，或者指针，obj实际在堆中，a = obj时得到的obj的地址1111（随便叫的），obj.name =   先判断是否为对象，然后再堆中成欣欣
// 然后打印a.name，发现a存放的是地址，顺着地址走到了obj，然后打印出欣欣。这就是为什么叫引用类型，引用地址