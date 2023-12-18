moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]

var tictactoe = function(moves) {
    let arr1 = []
    let arr2 = []
    let map = new Map()
    map.set([0,0],[-1,-1])
    map.set([1,1],[0,0])
    map.set([2,2],[1,1])
    map.set([0,1],[-1,0])
    map.set([0,2],[-1,1])
    map.set([1,0],[0,-1])
    map.set([2,0],[1,-1])
    map.set([1,2],[0,1])
    map.set([2,1],[1,0])

    if(moves.length<5)return "Pending"
    for (let i = 0; i < moves.length;i+=2) {
        arr1.push(moves[i]);
        county += map.get(arr1[arr1.length-1])[0]
        countx += map.get(arr1[arr1.length-1])[1]
    }

    for (let i = 1; i < moves.length;i+=2){
        arr2.push(moves[i]);
    }
    console.log(arr2);
    return arr1
};


console.log(tictactoe(moves));