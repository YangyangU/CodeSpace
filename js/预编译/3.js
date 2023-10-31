function foo(a,b){
    console.log(a); //1
    c=0;
    var c;
    a =3;
    b =2;
    console.log(b); //2
    function b(){} //函数声明不执行
    function d(){} //函数声明不执行
    console.log(b); //2
}
foo(1);

// 编译：
// AO{
//     a:undefined =>1
//     b:undefined =>function(){}
//     c:undefined 
//     d:undefined =>function(){}
// }

// 执行：
// AO{
//     a:undefined =>1 =>3
//     b:undefined =>function(){} =>2
//     c:undefined =>0
//     d:undefined =>function(){}
// }