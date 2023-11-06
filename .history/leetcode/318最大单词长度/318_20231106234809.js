words = ["abcw","baz","foo","bar","xtfn","abcdef"]


function maxProduct(words) {
    function getBitmask(word) {
        let bitmask = 0;
        for (let i = 0; i < word.length; i++) {
            bitmask |= 1 << (word.charCodeAt(i) - 'a'.charCodeAt(0));
        }
        return bitmask;
    }

    let bitmasks = [];
    for (let word of words) {
        bitmasks.push(getBitmask(word));
    }

    let maxProduct = 0;
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if ((bitmasks[i] & bitmasks[j]) === 0) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }

    return maxProduct;
}

console.log(maxProduct(words));


// function maxProduct(words) {
//     function haveDuplicateCharacters(str1, str2) {
//         for (let i = 0; i < str1.length; i++) {
//             for (let j = 0; j < str2.length; j++) {
//                 if (str1[i] === str2[j]) {
//                     return true; // 发现重复字符，返回 true
//                 }
//             }
//         }
//         return false; // 没有找到重复字符，返回 false
//     }

//     let maxProduct = 0;
//     for (let i = 0; i < words.length - 1; i++) {
//         for (let j = i + 1; j < words.length; j++) {
//             if (!haveDuplicateCharacters(words[i], words[j])) {
//                 maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
//             }
//         }
//     }

//     return maxProduct;
// }





// var maxProduct = function(words) {
//     let n = 0
//     let len = words.length
//     let left = 0
//     let right = len - 1
//     while (left < right && hasCommonLetter) {
//         n = Math.max(length(words[left])*length(words[right]),n)
//     }
// };

// var length = function(words){
//     return words.length
// }
