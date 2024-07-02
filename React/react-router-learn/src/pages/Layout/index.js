import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            我是layout
            <br/>
            <Link to={"/board"}>面板</Link>|
            <Link to={"/about"}>关于</Link>
            <Outlet/>
        </div>
    );
};

export default Layout;