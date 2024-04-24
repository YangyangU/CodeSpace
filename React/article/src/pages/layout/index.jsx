import React from 'react';
import { Layout, Popconfirm,} from 'antd';
import './index.scss'
import Menu from './menu'

const { Header, Sider, Content } = Layout;

const MyLayout = () => {
    
    const confirm = () => {

    };
    const cancel = () => {

    }
    
    return (
        <div>
            <Layout>
                <Header className='header'>
                    <div className="logo"></div>
                    <div className="user-info">
                        <span className='user-name'>阳阳羊</span>
                        <span className='user-logout'>
                            <Popconfirm
                                title="是否退出登录"
                                onConfirm={confirm}
                                onCancel={cancel}
                                okText="确认"
                                cancelText="取消"
                            >
                                退出登录
                            </Popconfirm>
                        </span>
                    </div>
                </Header>
                <Layout className='body'>
                    <Sider>
                        <Menu></Menu>
                    </Sider>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default MyLayout;