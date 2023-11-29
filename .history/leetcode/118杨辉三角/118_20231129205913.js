numRows = 5

var generate = function(numRows) {
    let res = []
    for (var i = 0; i < numRows; i++) {
        res.push(generate(numRows-1))
    }
    return res
};

console.log(generate(numRows));