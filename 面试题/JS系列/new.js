function Car(name){
    this.name = name
}

function myNew (construtor,...args){
    let obj = {}
    obj.__proto__ = construtor.prototype
    let res = construtor.call(obj,...args)
    return res instanceof Array ? res : obj
}


let car = myNew(Car,'BMW',1,2)