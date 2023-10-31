// var obj = {
//     a:1,//键值对
//     b:2,
//     c:3
// }

// obj.a = 2;
// obj.b = 3;
// obj.c = 4;

// with(obj){
//     b = 3;
// }

function foo(obj){
    with(obj){//当with修改对象中不存在的属性时，会将该属性直接泄露到全局作用
        a=2
    }
}

var o2 ={
    b:2
}

foo(o2)
console.log(a);