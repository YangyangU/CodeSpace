words = ["wk","xf","ot","je","hd","kw","fx","to","ej"]
//if判断不断修改的数组会混乱?
// var maximumNumberOfStringPairs = function(words) {
//     if (words.length < 2) {
//         return 0;
//     }
//     let len = 0
//     for (var i = 0; i < words.length; i++) {
//         if(words.includes(words[i].split('').reverse().join('')) && words[i].split('').reverse().join('') !== words[i]) {
//             len +=1
//             words.shift()
//         }
//     }
//     return len
// };

var maximumNumberOfStringPairs = function(words) {
    if (words.length < 2) {
        return 0;
    }
    let count = 0;
    let wordSet = new Set();
    for (var i = 0; i < words.length; i++) {
        if (wordSet.has(words[i].split('').reverse().join(''))) {
            count += 1;
        } else {
            wordSet.add(words[i]);
        }
    }

    return count;
};
console.log(maximumNumberOfStringPairs(words));