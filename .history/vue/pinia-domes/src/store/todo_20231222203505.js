// todo数据管理模块 state actions
import {ref} from 'vue'
import { defineStore } from 'pinia';

// vue3.0 hook函数
export const useTodoStore = defineStore('tode',()=>{
    const todos = ref([])
    return{
        todos
    }
})