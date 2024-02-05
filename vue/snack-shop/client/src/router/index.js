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
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue'),
        meta:{
            title:'购物车'
        }
    },
    {
        path: '/mine',
        name: 'Mine',
        component: () => import('../views/Mine.vue'),
        meta:{
            title:'我的'
        }
    },
    {
        path: '/shops',
        name: 'Shops',
        component: () => import('../views/Shops.vue'),
        meta:{
            title:'我的'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router