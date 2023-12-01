rowIndex = 4

var getRow = function(rowIndex) {
    result = [[1]]
    for (var i = 0; i < rowIndex-1; i++) {
        var row = [1]
        for (var j = 0; j < i-1; j++) {
            row.push(result[i][j]+result[i][j-1])
        }
        row.push(1)
        result.push(row)
    }
    return row
};


console.log(getRow(rowIndex));