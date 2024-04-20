import React from 'react';
import {Link,Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header style={{height:'80px',background:'green'}}>header</header>
            <section style={{display:'flex'}}>
                <aside style={{width:'200px',height:'calc(100vh - 80px)',background:'pink'}}>
                    <ul>
                        <li><Link to='/layout/article'>文章</Link></li>
                        <li><Link to='/layout/publish'>发布</Link></li>
                    </ul>
                </aside>
                <section>
                    {/* 二级路由出口 */}
                    <Outlet></Outlet>
                </section>
            </section>
        </div>
    );
};

export default Layout;