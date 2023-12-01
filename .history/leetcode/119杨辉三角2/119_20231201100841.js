rowIndex = 2

var getRow = function(rowIndex) {
    result = [[1]]
    for (var i = 1; i < rowIndex; i++) {
        var row = [1]
        for (var j = 1; j < i; j++) {
            row.push(result[i-1][j-1]+row[i-1][j])
        }
        row.push(1)  
    }
    return row
};


console.log(getRow(rowIndex));