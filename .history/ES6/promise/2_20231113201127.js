function xq() {
    return new Promise()
    setTimeout(()=>{
        console.log('阳阳相亲了！');//两秒钟相亲
    },2000)
}


function marry() {
    setTimeout(()=>{
        console.log('阳阳结婚了！');
    },1000)
}

xq()
marry()