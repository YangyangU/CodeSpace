rowIndex = 5

var getRow = function(rowIndex) {
    for (var i = 1; i < rowIndex; i++) {
        row = [1]
        for (var j = 1; j < i; j++) {
            row.push(row[i][j-1]+row[i][j])
        }
    }
    return row
};


console.log(getRow(rowIndex));