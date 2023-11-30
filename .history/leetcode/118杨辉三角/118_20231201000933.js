numRows = 2

var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }

    const result = [[1]];

    for (let i = 1; i < numRows; i++) {
        const row = [1];
        for (let j = 1; j < i; j++) {
            row.push(result[i - 1][j - 1] + result[i - 1][j]);
        }
        row.push(1);
        result.push(row);
    }

    return result;
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