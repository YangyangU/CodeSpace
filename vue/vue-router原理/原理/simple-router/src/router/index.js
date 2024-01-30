// import {createRouter,createWebHistory} from 'vue-router'

import {createRouter,createWebHashHistory} from './myRouter'

const routes = [
    {
        path:'/',
        name:'home',
        component:()=> import('../views/home.vue')
    },
    {
        path:'/about',
        name:'about',
        component:()=> import('../views/about.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),//history模式 hash模式
    routes
})

export default router