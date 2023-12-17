moves = "UD"

var judgeCircle = function(moves) {
    let x = 0, y = 0
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === "U"){
            x++
        }
    }
};

console.log(judgeCircle(moves));