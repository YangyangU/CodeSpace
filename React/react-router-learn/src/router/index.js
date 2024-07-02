import { createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Home from '@/pages/Home'



const Login = lazy(() => import('@/pages/Login'))
const Article = lazy(() => import('@/pages/Article'))
const Layout = lazy(() => import('@/pages/Layout'))
const Board = lazy(() => import('@/pages/Board'))
const About = lazy(() => import('@/pages/About'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={'加载中'}><Layout/></Suspense>,
        children:[
            {
                index: true, //默认二级路由
                path: 'board',
                element: <Suspense fallback={'加载中'}><Board/></Suspense>
            },
            {
                path: 'about',
                element: <Suspense fallback={'加载中'}><About/></Suspense>
            },
        ]
    },
    {
        path: '/login',
        element: <Suspense fallback={'加载中'}><Login /></Suspense>,
    },
    {
        path: '/article/:id/:name',
        element: <Suspense fallback={'加载中'}><Article /></Suspense>,
    },
    {
        path: '*',
        element: <Suspense fallback={'加载中'}><NotFound/></Suspense>
    },
    {
        path: '/home',
        element: <Suspense fallback={'加载中'}><Home/></Suspense>,
        children:[
            {
                index: true, //默认二级路由
                path: 'board',
                element: <Suspense fallback={'加载中'}><Board/></Suspense>
            },
            {
                path: 'about',
                element: <Suspense fallback={'加载中'}><About/></Suspense>
            },
        ]
    }
])

export default router