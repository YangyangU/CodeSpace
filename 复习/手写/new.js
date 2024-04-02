
function myNew(Fn){
    var obj = {}
    obj.__proto__ = Fn.prototype
    Fn.call(obj)
    return obj
}


function myNew2(Fn,...args){
    // let obj = Object.create(Fn.prototype)
    let obj = {}
    obj.__proto__ = Fn.prototype
    let res = Fn.call(obj,...args)
    return res instanceof Array ? res : obj
}