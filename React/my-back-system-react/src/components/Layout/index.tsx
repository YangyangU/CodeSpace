import React, { useEffect } from 'react';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Aside from '@/components/Aside';
import Header from '@/components/Header';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store';
import Tag from '@/components/Tag';
import Auth from '@/router/Auth';
import { setMenuList } from '@/store/reducers/tabs';

const View: React.FC = () => {
    const collapsed = useSelector((state: RootState) => state.tab.isCollapse);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        const storedMenuList = JSON.parse(
            localStorage.getItem('my-back-menu') || '[]',
        );
        dispatch(setMenuList(storedMenuList));
    }, [dispatch]);
    return (
        <Auth>
            <Layout className="main-container" style={{ height: '93vh' }}>
                <Aside collapsed={collapsed}></Aside>
                <Layout>
                    <Header collapsed={collapsed}></Header>
                    <Tag />
                    <Layout.Content
                        style={{
                            margin: '16px 16px',
                            padding: 16,
                            width: '98%',
                            maxHeight: '800px',
                            overflow: 'auto',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </Layout.Content>
                </Layout>
            </Layout>
        </Auth>
    );
};

export default View;
