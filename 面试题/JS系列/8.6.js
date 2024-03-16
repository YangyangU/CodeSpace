class Parent {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}


class Child extends Parent{
    constructor(name){
        super(name);//子类传参给到父类
        this.age = 18
    }
}

const c = new Child('Tom');
console.log(c.name);