numRows = 2

var generate = function(numRows) {
    let res = []
    let m = [1];
    let n = [1];
    m.unshift(0)
    n.push(0)

    if(numRows == 0) return
    else if(numRows == 1){
        return [res]
    }
    for (var i = 0; i < numRows; i++) {
        res.push(m[i]+n[i])
        newres.push(res[i])
    }
    return res
};

console.log(generate(numRows));
