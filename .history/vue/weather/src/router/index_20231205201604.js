import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/'
        redirect:'/home'
    },
    {
        //网页路径一般小写
        path:'/home',
        //主键名
        name: 'home',
        component:()=> import('../views/Home.vue')
    },
]

const router =createRouter({
    history: createWebHistory(),
    routes
})


export default router