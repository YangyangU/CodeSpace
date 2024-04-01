
//ES6
// class Parent{
//     constructor(name){
//         this.name = name;
//     }
// }

// class Child extends Parent{
//     constructor(name, age){
//         super(name);
//         this.age = age;
//     }
// }

// ES6之前
function Parent(name){
    this.name = name;
}

Parent.prototype.say = function(){
    console.log('hello');
}

function Child(name){
    Parent.call(this, name);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child



