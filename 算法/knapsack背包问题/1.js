function knapsack(weight, value, bagweight) {
    let dp = new Array(weight.length).fill(null).map(
        () => new Array(bagweight + 1).fill(0)
    )
    // 初始化
    for (let j = weight[0]; j <= bagweight; j++) {
        dp[0][j] = value[0]
    }
    for (let i = 1; i < weight.length; i++) {
        for(let j = 0; j <= bagweight; j++) {
            if (j < weight[i]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], value[i] + dp[i - 1][j - weight[i]])
            }      
        }
    }
    return dp[weight.length - 1][bagweight]
}

console.log(knapsack([1, 3, 4], [15, 20, 30], 4))