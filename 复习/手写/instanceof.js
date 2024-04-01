

function myInstanceof(son,far){
    let Son = son.__proto__
    let Far = far.prototype
    while(Son !== null){
        if(Son === Far) return true
        Son = Son.__proto__
    }
    return false
}