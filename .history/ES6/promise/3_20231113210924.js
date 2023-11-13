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

function c() {
    console.log('c');
}
a()
b()