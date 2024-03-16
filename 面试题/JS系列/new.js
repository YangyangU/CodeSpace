function Car(){
    this.name = name
}

function myNew (...args){//数组
    let obj = {}
    obj.__proto__ = args[0].prototype
    let res = args[0].call(obj,...args.slice(1))//其他参数
    return res instanceof Array ? res : obj
}


let car = myNew(Car,'BMW',1,2)