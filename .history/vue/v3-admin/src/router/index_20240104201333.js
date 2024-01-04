import { usePermissStore } from '../store/permiss';

// 路由配置 后台管理系统
// 设置数组 
// admin [1,2,3]
// user [1]
// useRoute  meta.permiss 你要访问的页面的权限 includes true 
const routes = [
    {
        path: '/',
        redirect: '/dashboard' //重定向 30X
    },
    {
        path: '/',
        name: 'Home', // useRouter  push 
        component: Home, // Layout 
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页', // 路由守卫
                    permiss: '1' // 哪 些页面可以看吗？ 
                }
            },
            {
                path: '/table',
                name: 'basetable',
                meta: {
                    title: '表格', // 路由守卫
                    permiss: '2' // 哪 些页面可以看吗？ 
                }
            }
        ]
    }

]