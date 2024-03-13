//手写发布订阅

class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(eventName, fn) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(fn)
    }
    once(eventName,fn){
        const fn2 = (...args)=>{
            fn(...args)
            this.off(eventName, fn)
        }
        this.on(eventName, fn2)
    }
    emit(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(fn => fn(...args))
        }
    }
    off(eventName,fn){
        if(!this.events[eventName]){
            return
        }else{
            this.events[eventName] = this.events[eventName].filter(item => item !== fn)
        }
    }
}

let ev = new EventEmitter();

const fn =(str) =>{
    console.log(str);
}

ev.on('run',fn)
ev.emit('run',123)

ev.on('say',fn)
ev.emit('say','hello')