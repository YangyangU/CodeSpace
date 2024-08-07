import { PropsWithChildren, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isLogin } from '@/utils/auth';
import { getCurrentRouterMap, routes } from './index';

const Auth = (props: PropsWithChildren) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const router = getCurrentRouterMap(routes, location.pathname);
        if (!isLogin && router.auth) {
            navigate('/login');
        }
    }, [location.pathname]);
    return props.children;
};

export default Auth;
