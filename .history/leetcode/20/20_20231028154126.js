let s ='{[()]}'
let s2 = '(){}[]'
var isValid = function(s) {
    let stack = []
    let len=s.length
    let obj={
        '(':')',
        '[':']',
        '{':'}'
    }
    for(let i = 0; i < len; i++){
        if(s[i]=='{'||s[i]=='['||s[i]=='('){
            stack.push(s[i])
        }else{
            //判断是否与栈顶元素适配
        }

    }
};