/* eslint-disable react/prop-types */
//判断token是否存在 ? 允许跳转：重定向去login

import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

//高阶组件
function AuthRoute({ children }) {
    const isToken = getToken()

    if(isToken){
        return <>{children}</>
    }else{
        return <Navigate to='/login' replace />//上一个页面不会被缓存
    }
}

export { AuthRoute }