import {computed, inject,reactive} from 'vue'
const STORE_KEY = '__store__'

class Store {
    constructor(options){
        this.$options = options
        //_私有
        this._state = reactive({
            data:options.state()
        })
        this._mutations = options.mutations
        this._actions = options.actions
        this.getters = {}

        //Object.keys()方法获取options.getters对象的所有属性名数组。
        Object.keys(options.getters).forEach(name =>{
            const fn = options.getters[name]
            this.getters[name] = computed(() => fn(this.state))
        })
    }
    get state() { //读方法
        return this._state.data
    }

    commit=(type,payload) =>{
        const entry = this._mutations[type]
        entry && entry(this.state,payload)
    }
    dispatch=(type,payload)=>{
        const entry = this._actions[type]
        return entry && entry(this,payload)
    }
    install(app){
        // console.log(app);
        //发布者
        app.provide(STORE_KEY,this);
    }
}
//单一状态树

function createStore(options){
    return new Store(options);
}
function useStore(){
    return inject(STORE_KEY)
}

export {
    createStore,
    useStore
}

