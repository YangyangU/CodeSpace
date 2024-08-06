import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, Layout, Avatar, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import './index.css';
import avatar from '@/assets/images/avatar.jpg';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { collapseMenu } from '@/store/reducers/tabs';

const View: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
    const dispatch: AppDispatch = useDispatch();
    const logOut = () => {
        console.log('退出登录');
    };
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    个人中心
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                    onClick={() => {
                        logOut();
                    }}
                >
                    退出登录
                </a>
            ),
        },
    ];

    return (
        <Layout.Header className="header-container">
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => dispatch(collapseMenu())}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff',
                }}
            />
            <Dropdown menu={{ items }}>
                <Avatar size={32} src={<img src={avatar}></img>}></Avatar>
            </Dropdown>
        </Layout.Header>
    );
};

export default View;
