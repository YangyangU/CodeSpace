numRows = 1

var generate = function(numRows) {
    let res = [1]
    let m;
    let n;
    if(numRows == 0) {
        return
    }else if(numRows == 1){
        return [res]
    }
    for (var i = 0; i < numRows; i++) {
        m = [0] + res
        n = res + [0]
    }
    console.log(m);
    console.log(n);
    return [res]
};

console.log(generate(numRows));
