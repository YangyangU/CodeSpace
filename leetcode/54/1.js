
//针对n*n的矩形
// var spiralOrder = function(matrix) {
//     let res = []
//     n = matrix.length
//     if (matrix[0].length === 0) return res
//     let left = 0, right = n - 1, top = 0, bottom = n - 1
//     while (left <= right && top <= bottom) {
//         for (let i = left; i <= right; i++) res.push(matrix[top][i])
//         top++
//         for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
//         right--
//         for (let i = right; i >= left; i--) res.push(matrix[bottom][i])
//         bottom--
//         for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
//         left++
//     }
//     return res
// };


var spiralOrder = function(matrix) {
    let res = []
    n = matrix.length   //列
    m = matrix[0].length //行
    if (matrix[0].length === 0) return res
    let left = 0, right = m - 1, top = 0, bottom = n - 1
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) res.push(matrix[top][i])
        top++
        for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
        right--
        if(bottom >= top){//避免重复
            for (let i = right; i >= left; i--) res.push(matrix[bottom][i])
            bottom--
        }
        if(right >= left){
            for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
            left++
        }
    }
    return res
};