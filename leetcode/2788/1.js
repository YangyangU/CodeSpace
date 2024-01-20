words =["$easy$","$problem$"]
separator ="$"

var splitWordsBySeparator = function(words, separator) {
    
    var result = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var wordParts = word.split(separator);
        console.log(wordParts);
        for (var j = 0; j < wordParts.length; j++) {
            if(wordParts[j] !== ''){
                result.push(wordParts[j]);
            }
        }
    }
    return result;
};
//大佬
var splitWordsBySeparator = function(words, separator) {
    const arr = []
    for (const item of words) {
        arr.push(...item.split(separator).filter(i => i !== ''))
    }
    return arr
};

splitWordsBySeparator(words, separator)