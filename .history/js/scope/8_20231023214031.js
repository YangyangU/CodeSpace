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
    with(obj){
        a=2
    }
}

console.log(a);