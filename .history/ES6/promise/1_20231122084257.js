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


function asyncOperation1(callback) {
    setTimeout(function() {
        console.log('异步操作1完成');
        callback();
    }, 1000);
}

function asyncOperation2(callback) {
    setTimeout(function() {
        console.log('异步操作2完成');
        callback();
    }, 1000);
}

function asyncOperation3(callback) {
    setTimeout(function() {
        console.log('异步操作3完成');
        callback();
    }, 1000);
}

asyncOperation1(function() {
    asyncOperation2(function() {
        asyncOperation3(function() {
            console.log('所有异步操作完成');
        });
    });
});