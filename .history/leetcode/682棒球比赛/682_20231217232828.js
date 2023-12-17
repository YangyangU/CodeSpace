ops = ["5","2","C","D","+"]

var calPoints = function(operations) {
    for (let i = 0; i < operations.length; i++) {
        console.log(typeof operations[i]);
        if( typeof operations[i] === Number) {
            console.log(1);
        }
    }
};

console.log(calPoints(ops));