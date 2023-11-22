// function a() {
//     setTimeout(()=>{
//         console.log('阳阳');
//     },1000)
    
// }

// function b() {
//     setTimeout(()=>{
//         console.log('欣欣');
//     },0)
// }
// a()
// b()
// //刷新


function a() {
    setTimeout(function() {
        console.log('第一道菜来了');
        b()
    },1000)
}
function b(){
    setTimeout(function() {
        console.log('第二道菜来了');
        c()
    },1000)
}
function c() {
    setTimeout(function() {
        console.log('第三道菜来了');
        d()
    },1000)
}
function d() {
    setTimeout(function() {
        console.log('第四道菜来了');
        e()
    },1000)
}
function e() {
    setTimeout(function() {
        console.log('第五道菜来了');
    },1000)
}
a()