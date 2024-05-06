import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        redirect:'/login',
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/Login/index.vue')
    },
    
    {
        path:'/main',
        name:'main',
        redirect:'/main/home',
        component:()=>import('@/views/Main/index.vue'),
        children:[
            {
                path:'home',
                name:'home',
                component:()=>import('@/views/Home/index.vue')
            },
            {
                path:'user',
                name:'user',
                component:()=>import('@/views/User/index.vue')
            },
            {
                path:'mall',
                name:'mall',
                component:()=>import('@/views/Mall/index.vue')
            },
            {
                path:'page1',
                name:'page1',
                component:()=>import('@/views/PageOne/index.vue')
            },
            {
                path:'page2',
                name:'page2',
                component:()=>import('@/views/PageTwo/index.vue')
            }
        ]
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router