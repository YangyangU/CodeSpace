function productExceptSelf(nums) {
    const n = nums.length;

    // 用于保存每个元素左侧的乘积
    const leftProducts = new Array(n);
    leftProducts[0] = 1;

    // 计算左侧乘积
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    // 用于保存每个元素右侧的乘积
    const rightProducts = new Array(n);
    rightProducts[n - 1] = 1;

    // 计算右侧乘积
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    // 合并左侧和右侧的乘积得到最终结果
    const answer = new Array(n);
    for (let i = 0; i < n; i++) {
        answer[i] = leftProducts[i] * rightProducts[i];
    }

    return answer;
}