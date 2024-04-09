

function myInstanceof(left,right){
    let Son = left.__proto__
    let Far = right.prototype
    while(Son !== null){
        if(Son === Far) return true
        Son = Son.__proto__
    }
    return false
}