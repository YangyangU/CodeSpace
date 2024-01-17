var minCount = function(coins) {
    let count = 0;
    // for(let i = 0; i < coins.length; i++) {
    //     count += Math.ceil(coins[i]/2)
    // }
    //下面时间复杂度高
    count = coins.reduce((count,value)=>{
        count += Math.ceil(value/2)
        return count
    },0)
    return count
};