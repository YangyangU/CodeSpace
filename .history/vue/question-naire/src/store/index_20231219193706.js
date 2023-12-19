import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state(){//全局数据源
    return {
      questionList:[]
    }
  },
  getters: { // computed

  },
  mutations: { // methods
  },
  actions: {  // async methods
  },
  modules: {
    getQuestionList(state,list){
      state.questionList = list
    }
  }
})
