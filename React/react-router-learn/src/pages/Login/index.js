import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Login</h1>
            {/* 声明式 */}
            {/* <Link to='/home'>跳转至首页</Link> */}
            {/* 命令式 */}
            {/* <button onClick={()=>navigate('/home')}>跳转</button> */}
            {/* <button onClick={()=>navigate('/home?id=1&name=yangyang')}>跳转传参</button> */}
            <button onClick={()=>navigate('/home/1/yangyang')}>跳转传参</button>
        </div>
    );
};

export default Login;