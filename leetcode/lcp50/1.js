gem =[100,0,50,100]
operations =[[0,2],[0,1],[3,0],[3,0]]

var giveGem = function(gem, operations) {
    for (var i = 0; i < operations.length;i++) {
        gem[operations[i][1]] += Math.floor(gem[operations[i][0]]/2)
        gem[operations[i][0]] -= Math.floor(gem[operations[i][0]]/2)
    }
    console.log(gem);
    return Math.max(...gem) - Math.min(...gem)
};

console.log(giveGem(gem, operations));