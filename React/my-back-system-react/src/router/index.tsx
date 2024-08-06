import { RouteObject, createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Mall from '@/pages/Mall';
import User from '@/pages/User';
import NotFound from '@/pages/404';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="home" />,
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'mall',
                element: <Mall />,
            },
            {
                path: 'user',
                element: <User />,
            },
            {
                path: 'other',
                children: [
                    {
                        path: 'pageOne',
                        element: <div>other1</div>,
                    },
                    {
                        path: 'pageTwo',
                        element: <div>other2</div>,
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

const router = createBrowserRouter(routes as RouteObject[]);

export default router;
