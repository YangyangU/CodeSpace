// import {createStore} from 'vuex'
import {createStore} from './gvuex'

//全局共享 状态树
//单例模式
const store = createStore({//返回状态树对象
    state(){//节点
        return{
            count:1
        }
    },
    mutations:{
        add(state){
            state.count ++
        },
    },
    actions:{
        asyncAdd({ commit }){
            setTimeout(()=>{
                commit('add')
            },1000)
        }
    },
    getters:{
        double(state){
            return state.count * 2
        }
    },
    modules:{//分支

    }
})

export default store