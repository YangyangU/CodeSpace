class MyPromise {
    constructor(executor) {
        this.state = 'pending'//promise的状态
        this.value = undefined//接受resolve的参数
        this.reason = undefined//接受reject的参数
        this.onFulfilledCallbacks = []//存放then中resolve回调，可能有很多个then所以可能有很多回调，用数组
        this.onRejectedCallbacks = []

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                //把then内的回调触发掉
                this.onFulfilledCallbacks.forEach(cb => { cb(value) })
            }
        }

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                //把then内的回调触发掉
                this.onRejectedCallbacks.forEach(cb => { cb(reason) })
            }
        }
        executor(resolve, reject)
    }

    // 写在class内，constructor外，等同于MyPromise.prototype.then
    then(onFulfilled, onRejected) {
        //把onFulfilled存起来，供resolve调用
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value  //如果不是函数体设成函数体
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }  //如果不是函数体设成函数体

        //返回一个promise
        const newPromise = new MyPromise((resolve, reject) => {
            if (this.state === 'fulfilled') { //如果状态为fulfilled，then前面的promise对象状态是同步resolve
                setTimeout(() => {//官方是写成微任务，用setTimeout模拟异步
                    try {
                        const res = onFulfilled(this.value)
                        resolve(res)//保证当前promise对象的状态为fulfilled//应该放的是result里面的resolve中的参数
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        const res = onRejected(this.reason)
                        resolve(res)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            if (this.state === 'pending') {
                this.onFulfilledCallbacks.push((value) => {
                    setTimeout(() => {//保证调用的时候是异步调用
                        try {
                            const res = onFulfilled(value)
                            resolve(res)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
                this.onRejectedCallbacks.push((reason) => {
                    setTimeout(() => {
                        try {
                            const res = onRejected(reason)
                            resolve(res)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
        })

        return newPromise
    }

    static race(promises) {//静态方法
        return new MyPromise((resolve, reject) => {
            //看里面哪个状态先变更
            for (let promise of promises) {
                promise.then(
                    (value) => {
                        resolve(value)
                    },
                    (reason) => {
                        reject(reason)
                    },
                )
            }
        })
    }

    static all(promises) {//静态方法
        return new MyPromise((resolve, reject) => {
            let resolvedCount = 0;
            const values = [];

            // 遍历Promise数组
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(
                    (value) => {
                        values[i] = value;
                        resolvedCount++;

                        // 当所有Promise都已解决
                        if (resolvedCount === promises.length) {
                            resolve(values);
                        }
                    },
                    (reason) => {
                        // 如果任何一个Promise被拒绝，则立即reject整个all的结果
                        reject(reason);
                    },
                );
            }
        });
    }


    static any(promises) {//静态方法
        return new MyPromise((resolve, reject) => {
            let resolvedCount = 0;
            let reasons = [];

            for (let i = 0; i < promises.length; i++) {
                promises[i].then(
                    (value) => {
                        resolve(value);
                    },
                    (reason) => {
                        reasons[i] = reason
                        resolvedCount++;
                        if (resolvedCount === promises.length) {
                            reject(new AggregateError(reasons));
                        }
                    },
                );
            }
        });
    }
}


const a = () =>{
    return new MyPromise((resolve, reject) =>{
        setTimeout(()=>{
            // resolve('ok')
            reject('error')
        },1000)
    })
}


const b = () =>{
    return new MyPromise((resolve, reject) =>{
        setTimeout(()=>{
            // resolve('ok2')
            reject('error2')
        },500)
    })
}

const p = new MyPromise((resolve, reject) => {
    resolve('success');
})

// console.log(p)

// MyPromise.race([a(),b()]).then((res) =>{console.log(res);})//ok2
// MyPromise.all([a(),b()]).then((res) =>{console.log(res);})//[ 'ok', 'ok2' ]
MyPromise.any([a(),b()]).then(() =>{},(res)=>{console.log(res);})//

