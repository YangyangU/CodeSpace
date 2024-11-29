class EventEmitter {
    constructor() {
        this.listeners = {}
    }

    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = []
        }
        this.listeners[event].push(callback)
    }

    emit(event, ...args) {
        if (this.listeners[event]) {
            this.listeners[event].forEach((callback) => {
                callback(...args)
            })
        }
    }

    once(event, callback) {
        const fn = (...args) => {
            callback(...args)
            this.off(event, fn)
        }
        this.on(event, fn)
    }

    off(event, callback) {
        if (this.listeners[event]) {
            this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback)
        }
    }
}


class EventEmitter2 {
    constructor() {
        this.listeners = {}
    }

    on(event, cb) {
        if (!this.listeners[event]) {
            this.listeners[event] = []
        }
        this.listeners[event].push(cb)
    }
    emit(event, ...args) {
        if(this.listeners[event]){
            this.listeners[event].forEach((cb)=>{
                cb(...args)
            })
        }
    }
}