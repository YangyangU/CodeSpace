nums = [1,2,3]

var permute = function(nums) {
    const result = [];

    // 定义一个递归函数，参数 currentIndex 表示当前要处理的位置
    function generatePermutations(currentIndex) {
        // 如果当前位置是数组的最后一个位置，说明已经生成了一个排列
        if (currentIndex === nums.length - 1) {
            result.push([...nums]); // 将当前排列复制并添加到结果中
            return;
        }

        // 循环遍历当前位置及其后面的所有元素
        for (let i = currentIndex; i < nums.length; i++) {
            // 交换当前位置的元素与后面的元素
            [nums[currentIndex], nums[i]] = [nums[i], nums[currentIndex]];

            // 递归生成下一个位置的排列
            generatePermutations(currentIndex + 1);

            // 恢复原始数组，以便尝试其他交换
            [nums[currentIndex], nums[i]] = [nums[i], nums[currentIndex]];
        }
    }

    // 从第一个位置开始生成排列
    generatePermutations(0);

    // 返回最终的结果数组
    return result;
};

// 示例
const nums = [1, 2, 3];
const result = permute(nums);
console.log(result);
// 现在，让我们逐步解释这个方法：

// generatePermutations 是一个递归函数，它的参数 currentIndex 表示当前要处理的位置。
// 如果 currentIndex 到达数组的最后一个位置，就意味着我们已经完成了一种排列，因此我们将当前排列复制并添加到 result 数组中。
// 在循环中，我们遍历当前位置及其后面的所有元素。对于每个元素，我们将其与当前位置的元素交换，然后递归调用 generatePermutations 处理下一个位置。
// 为了防止修改原始数组，我们在递归完成后需要再次交换回来，保持数组的原始状态。
// 我们从第一个位置开始调用 generatePermutations，这样就会逐步生成所有可能的排列。
// 最终，result 数组包含了所有可能的全排列，我们将其返回。

console.log(nums);