function myNew(Fn,...args){
    let obj = Object.create(Fn.prototype);
    let res = Fn.apply(obj,args);
    return res instanceof Object? res : obj;
}

function myNew2 (Fn,...args){
    let obj = Object.create(Fn.prototype);
    let res = Fn.apply(obj,args)
    return res instanceof Object? res : obj;
}

function Person(name,age){
    this.name = name;
    this.age = age;
}

const p1 = myNew2(Person,'张三',18);
console.log(p1);

