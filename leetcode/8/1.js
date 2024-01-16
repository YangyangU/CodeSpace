var myAtoi = function(s) {
    let ask=['0','1','2','3','4','5','6','7','8','9','-',' ','+']
    let res = []
    for(let i = 0 ; i < s.length ; i++){
        if(ask.includes(s[i])){
            res.push(s.split('').splice(i,1))
        }else{
            return 0
        }
    }
    return Number(res.join(''));
};

console.log(myAtoi("4193 with words"));