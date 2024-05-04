import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      username: '',
      nickname: '',
      token:'',
    }
  },
  mutations: {
    getToken (state,token) {
      state.token = token
    },
    getUserInfo (state,{id,username, nickname}) {
      state.username = username
      state.nickname = nickname
    },

  },
  plugins: [
    createPersistedState({
      key:'my-app-store',
      paths: ['username', 'nickname','token']
    })
  ]
})

export default store