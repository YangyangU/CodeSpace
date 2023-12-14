prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
    let min = 0
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min,prices[i])
    }
    let index = prices.indexOf(prices[min])
    return index
};

console.log(maxProfit(prices));