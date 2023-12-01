rowIndex = 2

var getRow = function(rowIndex) {
    result = [[1]]
    for (var i = 0; i < rowIndex; i++) {
        var row = [1]
        for (var j = 0; j < i; j++) {
            row.push(result[i][j]+result[i][j+1])
        }
        row.push(1) 
        result.push(row)
    }
    return row
};


console.log(getRow(rowIndex));