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

//路由守卫  没登陆不让去登录，注册以外的页面
const whitePath = ['/login','/register']
router.beforeEach((to,from,next)=>{
    if(!whitePath.includes(to.path)){ //你想去详情页
        if(!sessionStorage.getItem('userInfo')){ //没登陆
            router.push('/login')
            return
        }
        next();
        return 
    }
    // console.log(to,from);
    next();
})

export default router