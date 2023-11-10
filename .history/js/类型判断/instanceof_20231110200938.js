function instanceOF(L,R){
    if(L.__proto__ === R.prototype){
        return true;
    }else{
        instanceOF(L.__proto__,R)
    }
    return false;
}
// function instanceOF(L,R){
//     let left = L.__proto__
//     let right = R.prototype

//     while(left !== null){
//         if(left===right){return true}
//     }
//     return false
// }

console.log(instanceOF([],Array));//true
instanceOF([],Object)//true
