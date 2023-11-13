function a() {
    setTimeout(() =>{
        console.log('a');
    },1000)
}

function b() {
    setTimeout(() =>{
        console.log('b');
    },1500)
}

function c() {//同步（不耗时）
    console.log('c');
}
// a()
// b()
// c()

//如何让c在ab执行完再执行
Promise.all([a(), b()]).then(c)//相当于Promise.all([a(), b()]).then(()=>{c()})