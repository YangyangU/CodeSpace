import React from 'react';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Aside from '@/components/Aside';
import Header from '@/components/Header';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import Tag from '@/components/Tag';
import Auth from '@/router/Auth';

const View: React.FC = () => {
    const collapsed = useSelector((state: RootState) => state.tab.isCollapse);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Auth>
            <Layout className="main-container">
                <Aside collapsed={collapsed}></Aside>
                <Layout>
                    <Header collapsed={collapsed}></Header>
                    <Tag />
                    <Layout.Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
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
