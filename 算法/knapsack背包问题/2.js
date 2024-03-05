
function knapsack(weight,value,bagweight) {
    const dp = new Array(bagweight + 1).fill(0);
    for(let i = 0; i < weight.length; i++){
        for(let j = bagweight; j >= weight[i]; j--){
            dp[j] = Math.max(dp[j], dp[j-weight[i]] + value[i]);
        }
    }
    return dp[bagweight];
}
console.log(knapsack([1, 3, 4], [15, 20, 30], 4))