class SuperTask{
    constructor(paralleCount = 2){
        this.tasks = []
        this.count = paralleCount
        this.runningCount = 0
    }
    add(task){
        return new Promise((resolve,reject)=>{
            this.tasks.push({
                task,
                resolve,
                reject
            })
        })
    }
    _run(){
        const {task,resolve,reject} = this.tasks.shift()
        task().then(resolve,reject).finally(()=>{
            this._run()
        })
    }
}