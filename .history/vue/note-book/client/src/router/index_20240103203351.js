import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        redirect: '/login',
    },
    {
        path:'/login',
        name: 'login',
        component:()=>import('../views/Login.vue')
    },
    {
        path:'/register',
        name: 'register',
        component:()=>import('../views/Register.vue')
    },
    {
        path:'/noteClass',
        name: 'noteClass',
        component:()=>import('../views/NoteClass.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router