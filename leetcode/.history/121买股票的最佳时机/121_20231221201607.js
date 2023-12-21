prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
    let run = 0
    for (var i = prices.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if(prices[j]<prices[i]) {
                run = prices[i] - prices[j]
                maxRun = Math.max(run, maxRun)
            }
        }
    }
    return maxRun
};

var maxProfit = function(prices) {
    let minPrice = prices[0]; // 记录最低价格
    let maxProfit = 0; // 记录最大利润
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // 更新最低价格
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice; // 更新最大利润
        }
    }
    
    return maxProfit;
};


//动态规划
const maxProfit = function (prices) {
    const dp = new Array(prices.length).fill(0)
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i],min)
        dp[i] = Math.max(dp[i-1],prices[i] - min)
    }
    return dp[prices.length-1]
}
console.log(maxProfit(prices));

//贪心
// 总是做出在当前看来是最好的选择
// 不从整体最优解上加以考虑，算法得到是局部最优解

function maxProfit(prices) {
    let min = prices[0]
}