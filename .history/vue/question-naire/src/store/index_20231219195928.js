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
      state.questionList = list   //将传进来的值赋给仓库
    }
  },
  actions: {  // async methods   //不能用数据源的数据
    getQuestionListAction(context){ //context 整个store
      axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/fri')
      .then(res=>{
        console.log(res);
        //触发getQuestionList
      })
    }
  },
  modules: {
    
  }
})
