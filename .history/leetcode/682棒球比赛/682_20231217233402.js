ops = ["5","2","C","D","+"]

var calPoints = function(operations) {
    let arr = []
    for (let i = 0; i < operations.length; i++) {
        if(Number(operations[i])) {
            arr.push(Number(operations[i]))
        }
    }
    arr.forEach(item=>{
        count += item
    });
};

console.log(calPoints(ops));