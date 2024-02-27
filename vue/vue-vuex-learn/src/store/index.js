import { createStore } from 'vuex'
import moduleA from '../modules/moduleA';
import moduleB from '../modules/moduleB';

const store = createStore({
    //需要管理的数据存放在这里
    state() {
        return {
            // msg: "hello vuex",
        };
    },

    //唯一可以同步修改state的地方
    mutations: {
        changeMsg(state, data) {
            state.msg = data
        }
    },

    //异步修改state,本质还是通过mutations修改
    actions: {
        async getMsg({ commit }, newMsg) {
            setTimeout(() => {
                commit('changeMsg', newMsg);
            }, 1000);
        }
    },

    //类似于vue中的计算属性computed
    getters: {
    },

    //如果需要vuex管理的数据多的话，可以拆分为一个个模块
    modules: {
        moduleA,
        moduleB
    }
})

export default store;