let num = 10

const findZY = (num)=>{
    let res = []
    for(let i =2;i<=num;i++){
        if(i%2==0){
            res.push(i)
        }
    }
    return res
}

console.log(findZY(num));