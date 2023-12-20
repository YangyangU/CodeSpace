accounts = [[1,2,3],[3,2,1]]


var maximumWealth = function(accounts) {
    let count = 0 ;
    for(var i = 0; i < accounts.length; i++){
        for(var j = 0; j < accounts.length; j++){
            count += accounts[j]
        }
        max = Math.max(max,count)
    }
};

console.log(maximumWealth(accounts));