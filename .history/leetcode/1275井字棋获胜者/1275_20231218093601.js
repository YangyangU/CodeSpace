moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]

var tictactoe = function(moves) {
    let arr1 = []
    let arr2 = []
    let countx = 0;
    let county = 0;
    let map = new Map()
    obj = [0,0]
    obj2 = [1,1]
    obj3 = [2,2]
    obj4 = [0,1]
    obj5 = [0,2]
    obj6 = [1,0]
    obj7 = [2,0]
    obj8 = [1,2]
    obj9 = [2,1]
    map.set(obj,[-1,-1])
    map.set(obj2,[0,0])
    map.set(obj3,[1,1])
    map.set(obj4,[-1,0])
    map.set(obj5,[-1,1])
    map.set(obj6,[0,-1])
    map.set(obj7,[1,-1])
    map.set(obj8,[0,1])
    map.set(obj9,[1,0])

    map.forEach((value,key) => {
        console.log(key,value);
    });

    if(moves.length<5)return "Pending"
    for (let i = 0; i < moves.length;i+=2) {
        arr1.push(moves[i]);
        // county += map.get(arr1[arr1.length-1])[0]
        // countx += map.get(arr1[arr1.length-1])[1]
    }
    if(countx===0 && county===0)return "A"

    countx = 0 ;
    county = 0 ;
    for (let i = 1; i < moves.length;i+=2){
        arr2.push(moves[i]);
        // county += map.get(arr2[arr2.length-1])[0]
        // countx += map.get(arr2[arr2.length-1])[1]
    }
    if(countx===0 && county===0)return "B"

    console.log(arr2);
    return arr1
};


console.log(tictactoe(moves));