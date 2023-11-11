//Person.prototype 原型是对象

Person.say = function(){//报错
    return 'Hello'
}
//所有函数都有prototype属性，没继承

function Person(){
    this.name = '阳阳'
    this.age =18
    // this.say=function(){
    //     return 'Hello'
    // }
}


console.log(p.say);
let p = new Person()
console.log(p);
// let p2 = new Person()//实例对象是私有的，实例对象隐式继承的是共有的
// console.log(p.say == p2.say) //判断父属性是否是一致的;

// console.log(p.say());