
// console.log(this);//{} //浏览器window

// var a = 1;
// console.log(global.a);//全局有个空对象window

// function identity(context) {
//     return context.name.toUpperCase()//将context.name转化成大写
// }

// function speek(context){
//     var greeting = "Hello,I am" + identity(context);
//     console.log(greeting);
// }
// var me ={
//     name:"Tom"
// }
// var you ={
//     name:"Jerry"
// }
// console.log(identity(you));
// speek(me)

function identity() {
    return this.name.toUpperCase()
}

function speek(){
    var greeting = "Hello,I am" + identity.call(this);
    console.log(greeting);
}
var me ={
    name:"Tom"
}
speek.call(me)
