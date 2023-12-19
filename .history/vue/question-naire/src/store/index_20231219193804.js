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
    getQuestionList(state,list){  //state自带的参数，访问数据源
      state.questionList = list
    }
  },
  actions: {  // async methods
  },
  modules: {
    
  }
})
