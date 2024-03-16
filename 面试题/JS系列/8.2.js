Parent.prototype.getName = function(){
    return this.name
}

function Parent(name){
    this.name = name
}


function Child(name){
    Parent.call(this,name)
    this.age = 17
}

let c1 = new Child('Tom')
let c2 = new Child('Jerry')

console.log(c2.getName());//访问不到原型链上的getName方法