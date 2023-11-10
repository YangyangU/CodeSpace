function instanceOF(L,R){
    if(L.__proto__ === R.prototype){
        return true;
    }else{
        instanceOF(L.__proto__,R)
    }
}
function instanceOF(L,R){
    let left = L.__proto__
    let right = R.prototype

    while(left !== null){
        if(left===right){return true}
    }
    return false
}

instanceOF([],Array)//true
instanceOF([],Object)//true
