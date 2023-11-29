numRows = 2

var generate = function(numRows) {
    let res = []
    for (var i = 0; i < numRows; i++) {
        res.push(generate(i))
    }
    return res
};

console.log(generate(numRows));