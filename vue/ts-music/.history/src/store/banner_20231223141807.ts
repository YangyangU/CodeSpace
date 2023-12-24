// hooks函数式编程思想
import {defineStore} from 'pinia'
import {ref} from 'vue'
import type {Banner} from '../models/banner'
// 仓库的分支
export const useBannerStore = defineStore('banner',()=>{
    const banners = ref<Banner[]>([])
    return {

    }
})