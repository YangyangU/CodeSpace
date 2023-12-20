accounts = [[1,2,3],[3,2,1]]


var maximumWealth = function(accounts) {
    let count = 0 ;
    let max = 0 ; 
    for(var i = 0; i < accounts.length; i++){
        count = 0
        for(var j = 0; j < i; j++){
            count += accounts[i][j]
        }
        max = Math.max(max,count)
    }
    return max
};

console.log(maximumWealth(accounts));