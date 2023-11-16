function foo() { 
    console.log(arguments);//关键字   对象   类数组  所以函数体都有  函数参数的所有集合   
    console.log(Array.from(arguments));//将类数组变成数组 
}
foo(1,2,3)


let arr = [1,2,3,4]

console.log(...arr);
