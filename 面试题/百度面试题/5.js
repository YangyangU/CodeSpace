//1 1 2 3 5 8 13 21

// function fb(n){
//     if(n==1 || n==2) return 1
//     return fb(n-1)+fb(n-2)
// }

function fb(n){
    let list = [1,1]
    for(let i=2; i<n; i++){
        list.push(list[i-2]+list[i-1])
    }
    return list[n-1]
}

console.log(fb(10));