## 背包问题
bagWight 容量上限 4kg物品
最大价值  dp
物品数组  value[15,20,30]
        weight[1,3,4]

- 0/1 背包
    - 1 拿
        重量增加，价值增大
    - 0 不拿
        重量不变，价值不变，不影响最优解
        每件物品只有一件
    完全背包 物品数量多种
    多重背包 每个物品的数量都不一样

- 暴力解法 O(2^n)


- 动态规划去解决
    - 定义dp数组 dp[i][j] 
        最优子结构 dp[i][j] 最后一个是最值 dp[value.length-1][j]
        清楚 i j 是什么含义  ？ i 表示第i个物品 j 表示背包的重量
        物品i放进容量为j的背包中，得到的最大价值

        矩阵
    - 状态转移方程
        dp[i][j]=max(dp[i-1][j],dp[i-1][j-weight[i]]+value[i])
    - 初始化
        子结构的分析 状态方向
    - 迭代
    - 返回结果
    
## 滚动数组
    将二维优化为一维    麻将牌
    上一行的状态计算完后，可以迭代到下一行 拷贝上一行，再来计算
    - dp[j] 容量为j的背包最大价值
    - 状态转移方程
        dp[j]=max(dp[j],dp[j-weight[i]]+value[i])
                  不放0     放1
    - 初始化
        dp[0] = 0
    - 迭代
        for(let i = 0;i<wight.length;i++){
            for(let j =bagweight;j>=0;j--){
                dp[j]=max(dp[j],dp[j-weight[i]]+value[i])
            }
        }