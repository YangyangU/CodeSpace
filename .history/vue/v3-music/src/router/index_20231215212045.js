//完成配置
import { createRouter,createWebHashHistory } from 'vue-router';
// PC端考虑兼容性 hs兼容性好
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            // App.vue 用来挂载的，不是用来写具体的
            component:()=> import('@/views/Root.vue'),
            children:[
                {
                    path:'discover',
                    name:'discover',
                    component:()=> import('@/views/discover'),
                }
            ]
        }
]
})

export default router