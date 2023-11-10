function instanceOF(L,R){
    L.__proto__ = Object.prototype
}

instanceOF([],Array)//true
instanceOF([],Object)//true
