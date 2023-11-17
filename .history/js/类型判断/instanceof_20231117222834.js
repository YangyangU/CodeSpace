// function instanceOF(L,R){
//     if(L.__proto__ === R.prototype){
//         return true;
//     }else if(L.__proto__ !==null){
//         instanceOF(L.__proto__,R)
//     };
//     return false;
// }
function instanceOF(L,R){
    let left = L.__proto__
    let right = R.prototype

    while(left !== null){
        if(left===right){return true}
        left = left.__proto__
    }
    return false
}

console.log(instanceOF([],Array));//true
console.log(instanceOF([],Object));//true
