numRows = 1

var generate = function(numRows) {
    let res = [[1]]
    let m;
    let n;
    if(numRows == 0) return
    // else if(numRows == 1){
    //     return [res]
    // }
    for (var i = 0; i < numRows; i++) {
        m = res.push([0])
        n = res + [0]
    }

    return [m]
};

console.log(generate(numRows));
