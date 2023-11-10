function instanceOF(L,R){
    if(L.__proto__ === R.prototype){
        return true;
    }else{
        instanceOF(L.__proto__,R.prototype)
    }
}
function instanceOF(L,R){
    let left = L.__proto__
    let right = R.prototype
}

instanceOF([],Array)//true
instanceOF([],Object)//true
