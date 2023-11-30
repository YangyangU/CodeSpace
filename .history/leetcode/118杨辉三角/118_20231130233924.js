numRows = 1

var generate = function(numRows) {
    let res = [1]
    let m = [1];
    let n = [1];

    if(numRows == 0) return
    // else if(numRows == 1){
    //     return [res]
    // }
    for (var i = 0; i < numRows; i++) {
        m = res.unshift(0)
        n = res.push(0)
    }

    return res
};

console.log(generate(numRows));
