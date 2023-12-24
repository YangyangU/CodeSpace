import {defineStore} from 'pinia';
import {ref} from 'vue'
import {usePersonalized} from '../api/index'
import type { Personalized } from '../models/personalized';

//专注于数据管理编程
export const usePersonalizedStore = defineStore('personalized',()=>{
    const personalizedMv = ref<Personalized[]>()
    return {
        personalizedMv
    }
})