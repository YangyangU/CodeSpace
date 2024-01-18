import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta:{
            title:'登录'
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue'),
        meta:{
            title:'注册'
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta:{
            title:'首页'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router