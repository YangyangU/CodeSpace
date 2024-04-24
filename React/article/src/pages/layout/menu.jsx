import React, { useState } from 'react';
import { RiseOutlined, SendOutlined, PieChartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('班级地区', '1', <SendOutlined />, [
        getItem('南昌市', '11', null, [
            getItem('AI全栈班', '111'),
            getItem('大数据班', '112'),
            getItem('Python班', '113'),
        ]),
        getItem('抚州市', '12', null, [
            getItem('AI全栈班', '121'),
        ]),
    ]),
    getItem('学习数据', '2', <RiseOutlined />, [
        getItem('leetCode', '21'),
        getItem('掘金文章', '22'),
    ]),
    getItem('就业数据', '3', <PieChartOutlined />, [
        getItem('南昌市', '31', null, [
            getItem('AI全栈班', '311'),
            getItem('大数据班', '312'),
            getItem('Python班', '313'),
        ]),
        getItem('抚州市', '32', null, [
            getItem('AI全栈班', '321'),
        ]),

    ]),
];
const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
        items2.forEach((item) => {
            if (item.key) {
                key[item.key] = level;
            }
            if (item.children) {
                return func(item.children, level + 1);
            }
        });
    };
    func(items1);
    return key;
};
const levelKeys = getLevelKeys(items);

const MyMenu = () => {
    const [stateOpenKeys, setStateOpenKeys] = useState(['1', '11']);
    const onOpenChange = (openKeys) => {
        const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
        // open
        if (currentOpenKey !== undefined) {
            const repeatIndex = openKeys
                .filter((key) => key !== currentOpenKey)
                .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
            setStateOpenKeys(
                openKeys
                    // remove repeat key
                    .filter((_, index) => index !== repeatIndex)
                    // remove current level all child
                    .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
            );
        } else {
            // close
            setStateOpenKeys(openKeys);
        }
    };

    const navigate = useNavigate()
    const handlerSelect = (item) => {
        console.log(item);
        navigate(item.key)
    }

    return (
        <div>
            <Menu
                mode="inline"
                theme='dark'
                defaultSelectedKeys={['111']}
                openKeys={stateOpenKeys}
                onOpenChange={onOpenChange}
                onSelect={handlerSelect}
                style={{
                    width: '100%',
                    height: '100%'
                }}
                items={items}
            />
        </div>
    );
};

export default MyMenu;