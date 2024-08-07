import { RouteObject, createBrowserRouter, Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Mall from '@/pages/Mall';
import User from '@/pages/User';
import NotFound from '@/pages/404';
import Login from '@/pages/Login';

interface Route {
    path?: string;
    name?: string;
    element?: ReactNode;
    children?: Route[];
    auth?: boolean;
    index?: boolean;
}

export const routes: Route[] = [
    {
        path: '/',
        element: <Layout />,
        auth: true,
        children: [
            {
                index: true,
                element: <Navigate to="home" />,
            },
            {
                path: 'home',
                auth: true,
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
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

type Router = Route & { child?: Router[] };

export const getCurrentRouterMap = (routers: Router[], path: string): Route => {
    for (const router of routers) {
        if (router.path == path) return router;
        if (router.child) {
            const childRouter = getCurrentRouterMap(router.child, path);
            if (childRouter) return childRouter;
        }
    }
    return routes[routes.length - 1];
};

const router = createBrowserRouter(routes as RouteObject[]);

export default router;
