import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:'/login',
        component:()=>import('@/views/Login/index.vue')
    },
    {
        path:'/',
        name:'main',
        redirect:'/home',
        component:()=>import('@/views/Main/index.vue'),
        children:[
        ]
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router