var maxIncreaseKeepingSkyline = function(grid) {
    const rowsMax = new Array(grid.length), colsMax = new Array(grid[0].length)
    //创建两个数组来存储每行每列的最高楼
    for(let i=0;i<grid.length;i++){
        let m = 0;
        for(let j=0;j<grid[0].length;j++)
            m = Math.max(m, grid[i][j])
        rowsMax[i] = m
    }
    for(let i=0;i<grid[0].length;i++){
        let m = 0;
        for(let j=0;j<grid.length;j++)
            m = Math.max(m, grid[j][i])
        colsMax[i] = m
    }
    let ans = 0
    for(let i=0;i<grid.length;i++)
        for(let j=0;j<grid[0].length;j++)
            ans += Math.min(rowsMax[i], colsMax[j]) - grid[i][j]//最大增大量
    return ans
};
