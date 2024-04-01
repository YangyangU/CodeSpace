function mergeSortAndUnique(arr1, arr2) {
    // 合并数组
    const mergedArray = arr1.concat(arr2);
    
    // 排序
    mergedArray.sort((a, b) => a - b);
    
    // 去重
    // const uniqueArray = mergedArray.filter((value, index, self) => self.indexOf(value) === index);

    // const uniqueArray = [...new Set(mergedArray)]

    const uniqueArray = Array.from(new Set(mergedArray))
    return uniqueArray;
}

// 测试
const arr1 = [1, 3, 5, 7, 9,10];
const arr2 = [2, 4, 6, 8, 10];
const mergedSortedUniqueArray = mergeSortAndUnique(arr1, arr2);
console.log(mergedSortedUniqueArray); // 输出: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]