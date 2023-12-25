coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

var checkStraightLine = function(coordinates) {
    let k =/ 
    for (var i = 0; i < coordinates.length; i++) {
        if((coordinates[1][1] - coordinates[0][1] )*(coordinates[i][0] - coordinates[0][0]) != ((coordinates[i][1] - coordinates[0][1] )*(coordinates[1][0] - coordinates[0][0]))){
            return false
        }
    }
    return true
};

console.log(checkStraightLine(coordinates));