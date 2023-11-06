
// console.log(this);//{} //浏览器window

// var a = 1;
// console.log(global.a);//全局有个空对象window

function identity(context) {
    return context.name.toUpperCase()
}

function speek(){
    var greeting = "Hello,I am" + identity();
}

