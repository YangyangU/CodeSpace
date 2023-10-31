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
            //将栈顶元素取出作为obj的key读取到value判断该value是否==item
            if(obj[stack.pop()]!=s[i]){
                return false;
            }
        }
    }
    return true;
};