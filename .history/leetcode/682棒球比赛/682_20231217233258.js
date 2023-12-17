ops = ["5","2","C","D","+"]

var calPoints = function(operations) {
    let arr = []
    for (let i = 0; i < operations.length; i++) {
        if(Number(operations[i])) {
            arr.push(Number(operations[i]))
        }
    }
};

console.log(calPoints(ops));