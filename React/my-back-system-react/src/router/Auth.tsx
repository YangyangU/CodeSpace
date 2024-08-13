import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isLogin } from '@/utils/auth';
import { getCurrentRouterMap, routes } from './';

const Auth = (props: PropsWithChildren) => {
    const location = useLocation();
    const router = getCurrentRouterMap(routes, location.pathname);
    console.log(router);

    if (!isLogin && router.auth) {
        return <Navigate to="/login" />;
    }
    return props.children;
};

export default Auth;
