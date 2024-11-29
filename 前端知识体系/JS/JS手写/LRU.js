//LRU缓存类
export class LRUCache {
    constructor(maxSize = 5) {
        this.cache = new Map();
        this.maxSize = maxSize;
    }

    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        return null;
    }

    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.maxSize) {
            this.cache.delete(this.cache.keys().next().value);
        }
        this.cache.set(key, value);
    }

    clear() {
        this.cache.clear();
    }
}

class LRUCache2 {
    constructor(){
        this.cache = new Map()
        this.size = 2
    }
    get(key){
        if(this.cache.has(key)){
            const value = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key,value)
            return value
        }
        return null
    }
    set(key, value){
        if(this.cache.has(key)){
            this.cache.delete(key)
        }else if(this.cache.size >= this.size){
            this.cache.delete(this.cache.keys().next().value)
        }
        this.cache.set(key, value)
    }

    clear(){
        this.cache.clear()
    }
}