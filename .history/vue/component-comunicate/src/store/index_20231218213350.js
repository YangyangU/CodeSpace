import { createStore } from 'vuex'

const store = createStore({
    state() {   //公共数据源
        return {
            lists: ['徐阳阳是大帅哥', '江雅欣是大美女', '徐阳阳喜欢江雅欣']
        }
    },
    mutations:{ //methods

    }
})

export default store
