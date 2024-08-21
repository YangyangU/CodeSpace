import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { icon2Element } from '@/utils/icon';
import { To, useNavigate, useLocation } from 'react-router-dom';
import type { AppDispatch } from '@/store';
import { setTagList, setCurrentTab } from '@/store/reducers/tabs';
import { flattenMenuList } from '@/utils/tab';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store';
import moom from '@/assets/images/moon.png';

type MenuItemType = {
    key: string;
    label: string;
    icon?: React.ReactNode;
    children?: MenuItemType[];
};

const View: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
    const menuList = useSelector((state: RootState) => state.tab.menuList);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([
        location.pathname,
    ]);

    useEffect(() => {
        setSelectedKeys([location.pathname]);
    }, [location.pathname]);

    const items: MenuItemType[] = menuList.map((item) => {
        const child: MenuItemType = {
            key: item.path,
            icon: icon2Element(item.icon),
            label: item.label,
        };
        if (item.children) {
            child.children = item.children.map((childItem) => {
                return {
                    key: childItem.path,
                    label: childItem.label,
                };
            });
        }
        return child;
    });

    const selectMenu = (e: { key: To; keyPath: To[] }) => {
        const tabs = flattenMenuList(menuList);
        navigate(e.key);
        tabs.map((item) => {
            if (e.key === item.path) {
                dispatch(
                    setCurrentTab({
                        path: item.path,
                        label: item.label,
                        name: item.name as string,
                    }),
                );
                dispatch(
                    setTagList({
                        path: item.path,
                        label: item.label,
                        name: item.name as string,
                    }),
                );
            }
        });
    };

    return (
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
            <h3 className="app-name">
                {collapsed ? (
                    <img
                        src={moom}
                        style={{
                            width: '30px',
                            height: '30px',
                            marginTop: '10px',
                            marginBottom: '-10px',
                        }}
                        alt=""
                    />
                ) : (
                    '超级管理系统'
                )}
            </h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['/home']}
                items={items}
                selectedKeys={selectedKeys}
                style={{
                    height: '100%',
                }}
                onClick={selectMenu}
            />
        </Layout.Sider>
    );
};

export default View;
