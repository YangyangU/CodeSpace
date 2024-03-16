Parent.prototype.getName = function(){
    return this.name
}

function Parent(name){
    this.name = name
}

Child.prototype = new Parent()  //原型链继承
Child.prototype.constructor = Child//添加构造器属性
function Child(name){   //构造函数继承
    Parent.call(this,name)
    this.age = 18
}

let c1 = new Child('Tom')

console.log(c1.getName());