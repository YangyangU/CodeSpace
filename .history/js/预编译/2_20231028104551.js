function fn(a){
    console.log(a);  //function a(){}
    var a=123   //function a(){} => 123
    console.log(a);  //123
    function a(){};  //函数声明不执行
    console.log(a);  //123
    var b = function(){};  //函数表达式  undefined => function(){}
    console.log(b);  //function(){}
    function d(){};  //函数声明不执行
    var d =a ;  //123
    console.log(d);  //123
}
fn(1);


// 1.创建`AO`对象(Action Object)

// 2.找有效标识符，将变量声明和形参作为`AO`的属性名，值为undefined

// 3.将形参和实参的值统一

// 4.在函数体内找函数声明，将函数名作为`AO`对象的属性名，值赋予函数体

// AO:{
//     a:undefined => 1 => function a(){},
//     b:undefined,
//     d:undefined => function a(){},
// }