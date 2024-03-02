# 为什么要有异步

因为JS是单线程的编程语言，同一时间只能执行一个任务

# JS为什么不设计成多线程？
1. 节约内存
2. 没有锁，解锁的过程，节约上下文切换的时间

```js
let a = 1
setTimeout(()=>{ //线程1    同时修改同一个变量——锁就来了  锁完要解锁  如果两个修改的地方在不同的上下文，那么上下文切换的时间就会浪费掉
    a = 2
},1000)
setTimeout(()=>{ //线程2
    a = 3
},1000)
console.log(3);
```

# 请你聊一聊异步的发展史
- 是什么
    JS中从最早的异步处理方式到现在的最新的异步处理方式

- 发展史
1. 回调函数：代码维护困难（回调地狱）并不会爆栈

```js
let count = 0;
const foo = () =>{
    console.log(count);
}
const bar = (callback) =>{
    setTimeout(()=>{
        count = 1
        callback();
    },1000)
}
bar(foo);
```

<!-- Promise如何解决异步 -->
2. Promise：
    1. 维护了一个状态：state，值为pending、fulfilled、rejected，目的是让Promise的状态一经改变无法再次修改，也就保证了then和catch不可能同时触发
    2. 内部的resolve函数会修改state为fulfilled，并会触发then中的回调

    3. then:
        1. 默认返回一个Promise对象，状态fulfilled
        2. 当then前面的promise状态为fulfilled，then中的回调直接执行
        当then前面的promise状态为rejected，then中的第二个回调直接执行
        当then前面的promise状态为pending，then中的回调会缓存起来，等待前面的promise状态改变后执行

3. Generator
    1. 可以分段执行，可以暂停
    2. 可以控制每个阶段的返回值
    3. 可以知道是否执行完毕
    4. 可以借助Thunk 和 co 模块处理异步，但是写法复杂，所以generator函数的意义其实是为了打造async await
        npm init -y  npm i co