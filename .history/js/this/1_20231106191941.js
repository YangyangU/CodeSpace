
// console.log(this);//{} //浏览器window

// var a = 1;
// console.log(global.a);//全局有个空对象window

function identity(context) {
    return context.name.toUpperCase()//将context.name转化成大写
}

function speek(context){
    var greeting = "Hello,I am" + identity(context);
}
var me ={
    name:"Tom"
}
speek(me)

