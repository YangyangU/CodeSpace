function Parent(){
    this.name = 'Tom'
    this.like = [1,2]
    this.girlfriend = {
        n:1
    }
}

Child.prototype = new Parent()

function Child(){
    this.age = 17
}

let child1 = new Child()
let child2 = new Child()

// console.log(child.name);

// child1.name = 'John'//改不动，相当于给自己加了一个
// child1.like.push(3)       //yes
// child1.girlfriend.n = 2   //yes
// child1.girlfriend = {n:2} //改不动

console.log(child1.name);
console.log(child2.name);