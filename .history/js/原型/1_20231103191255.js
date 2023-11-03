Person.say = function(){
    return 'Hello'  
}

function Person(){
    this.name = '掘金'
    this.age =18
    // this.say=function(){
    //     return 'Hello'
    // }
}

let p = new Person()

console.log(p.say());