// 1.创建GO对象 （Global Object）

// 2.找变量声明，将变量声明作为GO的属性名，值为undefined

// 3.在全局函数找函数声明，将函数名作为GO对象的属性名，值赋予函数体

// GO:{
//     global: undefined => 100
//     fn: function fn(){} 
// }


var global = 100;
function fn(){
    console.log(global);//先找函数作用域再找外层作用域，全局上下文GO先进栈，全局分为两
    }                    //类，变量环境与词法环境，变量环境存放var声明的变量，词法环境
                        //存放let const声明的变量
                        

//编译在执行前
// AO:{

// }
fn();