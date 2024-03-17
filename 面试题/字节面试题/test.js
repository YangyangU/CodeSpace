let obj = {
    a:1,
    b:2,
    c:3
}

let n = obj.a
Object.defineProperty(obj,'c',{//劫持属性 //三个参数(对象,属性,设置) //有就劫持，没有就加一个再劫持
    // get(){
    //     return n
    // },
    // set(newVal){
    //     n = newVal
    // },
    enumerable: false,//传入的参数属性是否可枚举
    writable: false, //传入的参数属性是否可写,有了这个get和set就不能要，互斥
    value:100,   //默认值
    configurable: false //是否可配置，可否增加和删除
})

// console.log(obj.a);//1
// delete obj.a //configurable: false 删不掉
// obj.a = 10//被劫持，无法修改
console.log(obj.c);//1

// for (let key in obj) {
//     console.log(key);
// }