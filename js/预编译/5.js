// 编译：
// GO:{
//     global: undefined //变量声明
//     fn: function fn(){}//函数体
// }
// 执行：
// GO:{
//     global: undefined => 100
//     fn: function fn(){}
// }

global =100;
function fn(){
    console.log(global);
    global =200;
    console.log(global);
    var global =300;
}
// 编译：
// AO:{
//     global: undefined
// }
// 执行：
// AO:{
//     global: undefined => 200 => 300
// }

fn();
var global;