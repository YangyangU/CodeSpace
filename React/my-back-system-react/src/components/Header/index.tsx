import { Layout, Avatar, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import './index.css';
import avatar from '@/assets/images/avatar.jpg';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { collapseMenu } from '@/store/reducers/tabs';
import { useNavigate } from 'react-router-dom';

const View: React.FC = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const logOut = () => {
        navigate('/login');
        localStorage.removeItem('my-back-token');
        localStorage.removeItem('my-back-menu');
    };
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a
                    onClick={() => {
                        navigate('/mine');
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
                        navigate('/area');
                    }}
                >
                    我的位置
                </a>
            ),
        },
        {
            key: '3',
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
            <div className="collapse-container">
                <input
                    className="label-check"
                    id="label-check"
                    type="checkbox"
                    onClick={() => dispatch(collapseMenu())}
                />
                <label htmlFor="label-check" className="hamburger-label">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                    <label></label>
                </label>
            </div>
            <Dropdown menu={{ items }}>
                <Avatar size={32} src={<img src={avatar}></img>}></Avatar>
            </Dropdown>
        </Layout.Header>
    );
};

export default View;
