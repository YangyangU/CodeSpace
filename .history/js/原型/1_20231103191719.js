Person.prototype.say = function(){//报错
    return 'Hello'
}
//所有函数都有prototype属性

function Person(){
    this.name = '掘金'
    this.age =18
    // this.say=function(){
    //     return 'Hello'
    // }
}


let p = new Person()

console.log(p);