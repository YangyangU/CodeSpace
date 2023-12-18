moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]

var tictactoe = function(moves) {
    let arr1 = []
    let arr2 = []
    let map = new Map()
    map = {
       '[0,0]':1,
    }
    if(moves.length<5)return "Pending"
    for (let i = 0; i < moves.length;i+=2) {
        arr1.push(moves[i]);
    }

    for (let i = 1; i < moves.length;i+=2){
        arr2.push(moves[i]);
    }
    console.log(arr2);
    return arr1
};


console.log(tictactoe(moves));