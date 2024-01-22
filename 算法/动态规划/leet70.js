//上n阶楼梯 = 上n-1阶楼梯 + 上n-2阶楼梯
function climbStairs(n) {
    const f = []
    f[1] = 1
    f[2] = 2
    for(let i = 3; i <= n; i++){
        f[i] = f[i-1] +f[i-2]
    }
    return f[n]
}

//找状态转移方程