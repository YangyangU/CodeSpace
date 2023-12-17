ops = ["5","2","C","D","+"]

var calPoints = function(operations) {
    let arr = []
    let count = 0
    for (let i = 0; i < operations.length; i++) {
        if(Number(operations[i])) {
            arr.push(Number(operations[i]))
        }else if(operations[i] === "C"){
            arr.pop()
        }else if(operations[i] === "D"){
            arr.push(arr[arr.length-1]*2)
        }else if(operations[i] === "+"){
            arr.push(arr[arr.length-1]+arr[arr.length-2])
        }
    }
    arr.forEach(item=>{
        count += item
    });
    return count
};

console.log(calPoints(ops));