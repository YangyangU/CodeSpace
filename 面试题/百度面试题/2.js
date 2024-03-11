function a(){
    return new Promise((resolve,reject)=>{
        resolve('ok')
    })
}

a().then((res)=>{
    console.log(res)
})

function myPromise(fn){
    this.state = 'pending'
    this.value = null
    this.reson = null
    const resolve = (value)=>{
        if(this.state === 'pending'){
            this.value = value
            this.state = 'fulfilled'
        }
    }
    const reject = (reson)=>{
        if(this.state === 'pending'){
            this.reson = reson
            this.state = 'rejected'
        }
    }
    fn(resolve,reject)
}