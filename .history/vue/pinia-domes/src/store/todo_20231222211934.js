// todo数据管理模块 state actions
import {ref} from 'vue'
import { defineStore } from 'pinia';

// vue3.0 hook函数
export const useTodoStore = defineStore('todo',()=>{
    const todos = ref([
        {txt:'年前脱单'}
    ])
    const addTodo = ()={

    }
    return{
        todos,
        addTodo,
    }
})