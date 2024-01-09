//循环不变量

var generateMatrix = function(n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    let num = 1;
    while (top <= bottom && left <= right) {
        // 从左到右
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;

        // 从上到下
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        // 从右到左
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }

        // 从下到上
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }
    return matrix;
};