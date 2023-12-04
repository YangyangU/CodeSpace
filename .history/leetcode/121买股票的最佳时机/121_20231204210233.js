prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
    let min = Infinity
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min,prices[i])
    }
    
};

console.log(maxProfit(prices));