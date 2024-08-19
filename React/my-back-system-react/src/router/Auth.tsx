import React, { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { routes, RouterWithTabAuthObject } from './';

const Auth = (props: PropsWithChildren) => {
    const location = useLocation();
    const token = localStorage.getItem('my-back-token');

    const normalizePath = (path: string) => {
        return path.startsWith('/') ? path : `/${path}`;
    };

    const getRouteMeta = (
        path: string,
        routes: RouterWithTabAuthObject[],
    ): RouterWithTabAuthObject | undefined => {
        const normalizedPath = normalizePath(path);

        for (const route of routes) {
            const routePath = normalizePath(route.path || '');
            if (routePath === normalizedPath) {
                return route;
            }
            if (route.children) {
                const childRoute = getRouteMeta(normalizedPath, route.children);
                if (childRoute) return childRoute;
            }
        }
        return undefined;
    };

    const currentRoute = getRouteMeta(location.pathname, routes);

    if (currentRoute?.meta?.title) {
        document.title = currentRoute.meta.title;
    }

    if (currentRoute?.meta?.needLogin && !token) {
        return <Navigate to="/login" replace />;
    }

    if (currentRoute?.path == '/login' && token) {
        return <Navigate to="/home" replace />;
    }

    return <>{props.children}</>;
};

export default Auth;
