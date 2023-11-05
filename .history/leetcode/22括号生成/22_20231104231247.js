var n = 3

// var generateParenthesis = function(n) {
//     ans=[]
//     for (var i=0; i<n; i++){
//         ans+='()'
//     }
//     return ans
// };


var generateParenthesis = function(n) {
    const result = [];
    
    function backtrack(s='', left=0, right=0) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }
        if (left < n) {
            backtrack(s + '(', left + 1, right);
        }
        if (right < left) {
            backtrack(s + ')', left, right + 1);
        }
    }
    
    backtrack();
    return result;
};


console.log(generateParenthesis(n))