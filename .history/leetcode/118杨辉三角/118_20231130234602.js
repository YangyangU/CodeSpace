numRows = 1

var generate = function(numRows) {
    let res = []
    let m = [1];
    let n = [1];

    if(numRows == 0) return
    // else if(numRows == 1){
    //     return [res]
    // }
    for (var i = 0; i < numRows; i++) {
        m.unshift(0)
        n.push(0)
        res[i]=m[i]+n[i]
    }

    return res
};

console.log(generate(numRows));
