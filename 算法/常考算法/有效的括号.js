const str = '()(){}[]'

const isValid = (str) => {
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const stack = []
    for(let i=0;i<str.length;i++){
        if(map[str[i]]){
            stack.push(str[i])
        }else{
            if(map[stack.pop()] !== str[i]){
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(isValid(str));
