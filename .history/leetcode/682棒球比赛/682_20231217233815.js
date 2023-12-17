ops = ["5","2","C","D","+"]

var calPoints = function(operations) {
    let arr = []
    let count = 0
    for (let i = 0; i < operations.length; i++) {
        if(Number(operations[i])) {
            arr.push(Number(operations[i]))
        }else if(operations[i] === "C"){
            arr.splice(i,1)
        }
    }
    arr.forEach(item=>{
        count += item
    });
};

console.log(calPoints(ops));