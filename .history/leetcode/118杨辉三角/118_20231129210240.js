numRows = 1

var generate = function(numRows) {
    let res = []
    for (var i = 0; i < numRows; i++) {
        res.push([i+1])
    }
    return res
};

console.log(generate(numRows));