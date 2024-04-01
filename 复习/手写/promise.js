class myPromise {
    constructor(executor){
        this.state = 'pending'
        this.reject = undefined
        this.resolve = undefined
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []

        const resolve =(value)=>{
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                this.onFulfilledCallbacks.forEach(cb => { cb(value) })
            }
        }
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                this.onRejectedCallbacks.forEach(cb => { cb(reason) })
            }
        }
    executor(resolve,reject)
    }
}