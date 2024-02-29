class MyPromise{
    constructor(executor){
        this.state = 'pending'//promise的状态
        this.value = undefined//接受resolve的参数
        this.reason = undefined//接受reject的参数
        this.onFulfilledCallback = []//存放then中resolve回调
        this.onRejectedCallback = []

        const resolve = (value) => {
            if(this.state === 'pending'){
                this.state = 'fulfilled'
                this.value = value
                //把then内的回调触发掉
                this.onFulfilledCallback.forEach(cb=>{cb(value)})
            }
        }

        const reject = (reason) => {
            if(this.state === 'pending'){
                this.state = 'rejected'
                this.reason = reason
                //把then内的回调触发掉
                this.onRejectedCallback.forEach(cb=>{cb(reason)})
            }
        }
        executor(resolve, reject)
    }

    // 等同于MyPromise.prototype.then
    then(onFulfilled, onRejected){
        //把onFulfilled存起来，供resolve调用
    }
}


const p = new MyPromise((resolve, reject)=>{    
    console.log(1);
    resolve('success');
})


console.log(p)