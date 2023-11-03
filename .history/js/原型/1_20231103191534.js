// Person.say = function(){//报错
//     return 'Hello'
// }

function Person(){
    this.name = '掘金'
    this.age =18
    // this.say=function(){
    //     return 'Hello'
    // }
}
Person.name = '1'


let p = new Person()

console.log(p);