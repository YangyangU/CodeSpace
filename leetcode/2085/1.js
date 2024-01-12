words1 = ["leetcode", "is", "amazing", "as", "is"], words2 = ["amazing", "leetcode", "is"]

var countWords = function (words1, words2) {
    let hashTable = {};
    let hashTable2 = {};
    let arr11 = []
    let arr22 = []
    let num = 0

    // 遍历数组，将元素及其出现次数存储在哈希表中
    for (let i = 0; i < words1.length; i++) {
        if (hashTable[words1[i]]) {
            hashTable[words1[i]]++;
        } else {
            hashTable[words1[i]] = 1;
        }
    }

    for (let i = 0; i < words2.length; i++) {
        if (hashTable2[words2[i]]) {
            hashTable2[words2[i]]++;
        } else {
            hashTable2[words2[i]] = 1;
        }
    }

    // 遍历哈希表，找到出现次数为1的元素
    for (let key in hashTable) {
        if (hashTable.hasOwnProperty(key) && hashTable[key] === 1) {
            arr11.push(key)
        }
    }
    for (let key in hashTable2) {
        if (hashTable2.hasOwnProperty(key) && hashTable2[key] === 1) {
            arr22.push(key)
        }
    }
    for(let i = 0; i < arr11.length; i++) {
        if(arr22.includes(arr11[i]) ) {
            num++
        }
    }
    return num
};

console.log(countWords(words1, words2));
