
function minLength(s) {
    let stack = [];
  
    for (let char of s) {
      if (stack.length >= 1 && (char === 'B' && stack[stack.length - 1] === 'A' || char === 'D' && stack[stack.length - 1] === 'C')) {
        stack.pop(); // 删除匹配的 "AB" 或 "CD" 子串
      } else {
        stack.push(char); // 将当前字符入栈
      }
    }
  
    return stack.length;
  }
s='asdasdasd'
minLength(s)