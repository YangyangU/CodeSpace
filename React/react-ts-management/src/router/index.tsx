import { lazy, Suspense} from "react";
import { createBrowserRouter } from 'react-router-dom'

const Home = lazy(() => import('@/pages/Home'));
const Login = lazy(() => import("@/pages/Login"));
const NotFound = lazy(() => import("@/pages/404"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={'loding...'}><Home /></Suspense>,
    },
    {
        path: "/login",
        element: <Suspense fallback={'loding...'}><Login /></Suspense>,
    },
    {
        path: "*",
        element: <Suspense fallback={'loding...'}><NotFound /></Suspense>,
    }
])

export default router;