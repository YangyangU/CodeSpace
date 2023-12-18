moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]

var tictactoe = function(moves) {
    let arr1 = []
    for (var i = 0; i < moves.length; i+2) {
        arr1.push(moves[i]);
    }
    console.log();
};


console.log(tictactoe(moves));