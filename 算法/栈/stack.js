let stack = [] //只能用数组的push和pop方法 是数组的弱化


//入栈
stack.push('东北大板')
stack.push('哈根达斯')
stack.push('小布丁')
stack.push('钟薛高')
stack.push('巧乐兹')

//出栈
while(stack.length){//强行转换为true，false，除了0都是true
    const top=stack[stack.length-1]
    console.log('我在吃',top);
    stack.pop();
}