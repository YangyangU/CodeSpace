import { Layout, Avatar, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import './index.css';
import avatar from '@/assets/images/avatar.jpg';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { collapseMenu } from '@/store/reducers/tabs';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const View: React.FC = () => {
    const { i18n, t } = useTranslation();
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
                    {t('header.mine')}
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
                    {t('header.area')}
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
                    {t('header.logout')}
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
            <div className="lang">
                <a onClick={() => i18n.changeLanguage('zh')}>中文</a> |
                <a onClick={() => i18n.changeLanguage('en')}>English</a>
                <Dropdown menu={{ items }}>
                    <Avatar size={32} src={<img src={avatar}></img>}></Avatar>
                </Dropdown>
            </div>
        </Layout.Header>
    );
};

export default View;
