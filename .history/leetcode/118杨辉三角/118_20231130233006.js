numRows = 2

var generate = function(numRows) {
    let res = [[1]]
    if(numRows == 0) {
        return
    }else if(numRows == 1){
        return res
    }
    for (var i = 0; i < numRows; i++) {
        res.push()
    }
    return res
};

console.log(generate(numRows));