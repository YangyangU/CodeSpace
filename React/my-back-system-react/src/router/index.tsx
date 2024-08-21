import { RouteObject, createBrowserRouter, Navigate } from 'react-router-dom';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Mall from '@/pages/Mall';
import User from '@/pages/User';
import NotFound from '@/pages/404';
import Login from '@/pages/Login';
import Car from '@/pages/Car';
import ChatBot from '@/pages/ChatBot';
import Mine from '@/pages/Mine';

export type RouterWithTabAuthObject = Omit<RouteObject, 'children'> & {
    label?: string;
    auth?: boolean;
    meta?: {
        title: string;
        needLogin: boolean;
    };
    children?: RouterWithTabAuthObject[];
};

export const routes: RouterWithTabAuthObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to={'/home'}></Navigate>,
            },
            {
                path: 'home',
                index: true,
                meta: {
                    title: '首页',
                    needLogin: true,
                },
                element: <Home />,
            },
            {
                path: 'mall',
                meta: {
                    title: '商品列表',
                    needLogin: true,
                },
                element: <Mall />,
            },
            {
                path: 'user',
                meta: {
                    title: '用户列表',
                    needLogin: true,
                },
                element: <User />,
            },
            {
                path: 'car',
                meta: {
                    title: '3D看车',
                    needLogin: true,
                },
                element: <Car />,
            },
            {
                path: 'bot',
                meta: {
                    title: 'Chat Bot',
                    needLogin: true,
                },
                element: <ChatBot />,
            },
            {
                path: 'mine',
                meta: {
                    title: '个人中心',
                    needLogin: true,
                },
                element: <Mine />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

const router = createBrowserRouter(routes as RouteObject[]);

export default router;
