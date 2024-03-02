var findWordsContaining = function(words, x) {
    let res = []
    for(let i= 0; i < words.length; i++) {
        if(words[i].split('').includes(x)){
            res.push(i)
        }
    }
    return res
};

var findWordsContaining = function(words, x) {
    let res = []
    words.forEach((item,i)=>{
        if(item.indexOf(x)>-1){
            res.push(i)
        }
    })
    return res
};