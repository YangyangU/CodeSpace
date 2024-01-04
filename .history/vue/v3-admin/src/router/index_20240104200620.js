//路由配置 后台管理系统
const routes = [
    {
        path:'/',
        redirect:'/dashboard' //重定向30x
    },
    {
        path:'/',
        name:'Home',//userRouter push
        component: Home,//Layout
        children:[
            {
                path:'/dashboard',
                name:'dashboard',
                meta:{
                    title:'系统首页',//路由守卫
                    permiss:'1'//哪些用户可以看
                }
            },
            {
                path:'/table',
                name:'basetable',
                meta:{
                    title:'表格',//路由守卫
                    permiss:'2'//哪些用户可以看
                }
            }
        ]
    },
    
]