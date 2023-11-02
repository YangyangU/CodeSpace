//对象的创建
//1. var obj ={} //对象字面量|对象直接量

//2. Object() //内置函数  构造函数 用new调用

// let obj = new Object();

//3. 自定义构造函数

function Car(){
    this.name = 'BNW'
    this.height = '1400'
    this.width = '4900'
    this.weight = 1000
}

//let car1 =Car();普通函数调用，没返回值

let car1 = new Car();

console.log(car1);
console.log(car2);

//构造函数就像工厂，可以批量化生成对象