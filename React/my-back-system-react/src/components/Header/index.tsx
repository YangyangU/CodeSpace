import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, Layout, Avatar, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import './index.css';
import avatar from '@/assets/images/avatar.jpg';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { collapseMenu } from '@/store/reducers/tabs';
import { useNavigate } from 'react-router-dom';

const View: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const logOut = () => {
        navigate('/login');
        localStorage.removeItem('my-back-token');
        localStorage.removeItem('my-back-menu');
    };
    const goMine = () => {
        navigate('/mine');
    };
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a
                    onClick={() => {
                        goMine();
                    }}
                >
                    个人中心
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a
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
