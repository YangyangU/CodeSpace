moves = "UD"

var judgeCircle = function(moves) {
    let x = 0, y = 0
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === "U"){
            y++
        }else if (moves[i] === "D"){
            y--
        }else if (moves[i] === "L"){
            x--
        }else if (moves[i] === "R"){
            x++
        }
    }
    return (x === 0 && y === 0)
};

console.log(judgeCircle(moves));