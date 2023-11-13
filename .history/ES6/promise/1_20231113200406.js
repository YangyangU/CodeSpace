function a(cb) {
    setTimeout(()=>{
        console.log('阳阳');
        cb()
    },1000)
    
}

function b() {
    setTimeout(()=>{
        console.log('欣欣');
    },1000)
}
a()
b()
//刷新
