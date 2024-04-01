
function myNew(Fn){
    var obj = {}
    obj.__proto__ = Fn.prototype
    Fn.call(obj)
    return obj
}


function myNew2(construtor,...args){
    let obj = {}
    obj.__proto__ = construtor.prototype
    let res = construtor.call(obj,...args)
    return res instanceof Array ? res : obj
}