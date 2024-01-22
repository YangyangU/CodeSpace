const coins = [1,2,5] ,amount = 11


var coinChange = function (coins, amount) {
    if(amount === 0) return {0:0}
    let max = {}
    function helper(){
        for (var i = coins.length - 1; i >= 0; i--){
            if(amount / coins[i] >= 1){//最大面值能用
                max[coins[i]]=Math.floor(amount/coins[i])
                let rest = amount% coins[i]
                return Object.assign(max,coinChange(coins,rest))
            }
        }
    }
}

var coinChange = function (coins, amount) {
    //每个目标金额对应的最少硬币数
    const f = [0,Infinity]

    for (var i = 1; i <= amount; i++) {
        f[i] = Infinity//不同金额的最小硬币个数

        for (var j = 0; j < coins.length; j++) {
            if(i - coins[j] >= 0){
                f[i] = Math.min(f[i], f[i - coins[j]] + 1)
            }
        }
    }
    return f[amount] === Infinity ? -1 : f[amount]
}