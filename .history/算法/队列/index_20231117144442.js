//栈
// let stack = [];//pop()push()只有方法


//队列
let queue = [];//管道  两端开口  一边传值一边出值  先进先出
                //只能用push()和shift()从前面删值  或者 只用pop()和unshift()  没有规定头尾

queue.push('宫保鸡丁')
queue.push('番茄猪肉')
queue.push('番茄鼻屎')
queue.push('番茄鸡蛋')

while (queue.length){
    const top = queue[0]
    console.log(top)
    queue.shift()
}