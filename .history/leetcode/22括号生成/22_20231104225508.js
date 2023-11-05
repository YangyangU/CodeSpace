var n = 3

var generateParenthesis = function(n) {
    ans=[]
    for (var i=0; i<n; i++){
        ans+='()'
    }
    return ans
};

console.log(generateParenthesis(n))