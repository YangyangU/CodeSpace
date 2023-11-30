numRows = 2

var generate = function(numRows) {
    let newres = new Set([1])
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
        newres.push(res)
    }
    return newres
};

console.log(generate(numRows));


// function generate(rows) {
//     let triangle = [];
  
//     for (let i = 0; i < rows; i++) {
//       triangle[i] = [];
//       triangle[i][0] = 1;
  
//       for (let j = 1; j < i; j++) {
//         triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//       }
  
//       if (i > 0) {
//         triangle[i][i] = 1;
//       }
//     }
  
//     return triangle;
//   }