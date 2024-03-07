import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path: '/login',
        component: () => import('../views/Login/index.vue'),
    },
    {
        path: '/register',
        component: () => import('../views/Register/index.vue'),
    },
    {
        path:'/layout',
        component: () => import('../views/Layout/index.vue'),
        children:[
            {
                path: '/home',
                component: () => import('../views/Home/index.vue'),
            },
            {
                path: '/cart',
                component: () => import('../views/Cart/index.vue'),
            },
            {
                path: '/mine',
                component: () => import('../views/Mine/index.vue'),
            },
            {
                path: '/shops',
                component: () => import('../views/Shops/index.vue'),
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router