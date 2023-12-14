prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
    let min = prices[0]
    let max = 0
    for (let i = 0; i < prices.length;i++) {
        if (prices[i] < min){
            min = prices[i]
        }else if (prices[i] - min > max){
            max = prices[i] - min
        }
    }
    return max
};

console.log(maxProfit(prices));