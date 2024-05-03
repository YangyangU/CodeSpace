import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        redirect: '/noteClass',
    },
    {
        path:'/login',
        name: 'login',
        component:()=>import('../views/Login.vue'),
        meta:{
            title:'登录啦~'
        }
    },
    {
        path:'/register',
        name: 'register',
        component:()=>import('../views/Register.vue'),
        meta:{
            title:'注册哟~'
        }
    },
    {
        path:'/noteClass',
        name: 'noteClass',
        component:()=>import('../views/NoteClass.vue'),
        meta:{
            title:'记笔记咯~'
        },
    },
    {
        path:'/noteList',
        name: 'noteList',
        component:()=>import('../views/NoteList.vue'),
        meta:{
            title:'笔记列表'
        }
    },
    {
        path:'/noteDetail',
        name: 'noteDetail',
        component:()=>import('../views/NoteDetail.vue'),
        meta:{
            title:'笔记详情'
        }
    },
    {
        path:'/notePublish',
        name: 'notePublish',
        component:()=>import('../views/notePublish.vue'),
        meta:{
            title:'笔记发布'
        }
    },
    {
        path:'/mine',
        name: 'mine',
        component:()=>import('../views/Mine.vue'),
        meta:{
            title:'个人主页'
        }
    },
    {
        path:'/message',
        name: 'message',
        component:()=>import('../views/Message.vue'),
        meta:{
            title:'我的消息'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

//路由守卫  没登陆不让去登录，注册以外的页面
// const whitePath = ['/login','/register']
router.beforeEach((to,from,next)=>{

    document.title = to.meta.title//路由守卫一般做页面标题，大场面用不上

    // if(!whitePath.includes(to.path)){ //你想去详情页
        // if(!sessionStorage.getItem('userInfo')){ //没登陆
            // router.push('/login')
            // return
        // }
        // next();
        // return 
    // }
    // console.log(to,from);
    next();
})

// 但是程序员可以在浏览器手动添加userInfo

export default router