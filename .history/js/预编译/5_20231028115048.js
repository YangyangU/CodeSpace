// GO:{
//     global: undefined //变量声明
//     fn: function fn(){}//函数体
// }
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

// AO:{
//     global: undefined
// }
// AO:{
//     global: undefined => 200 => 300
// }

fn();
var global;