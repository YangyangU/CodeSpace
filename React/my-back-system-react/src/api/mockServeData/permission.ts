import Mock from 'mockjs';
export default {
    getMenu: (config) => {
        const { username, password } = JSON.parse(config.body);
        // 先判断用户是否存在
        // 判断账号和密码是否对应
        if (username === 'admin' && password === 'admin') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/home',
                            name: 'home',
                            label: '首页',
                            icon: 'HomeOutlined',
                            url: '/home/index',
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            icon: 'ShopOutlined',
                            url: '/mall/index',
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '用户管理',
                            icon: 'UserOutlined',
                            url: '/user/index',
                        },
                        {
                            path: '/other',
                            label: '其他',
                            icon: 'SettingOutlined',
                            children: [
                                {
                                    path: '/other/pageOne',
                                    name: 'page1',
                                    label: '页面1',
                                    icon: 'SettingOutlined',
                                },
                                {
                                    path: '/other/pageTwo',
                                    name: 'page2',
                                    label: '页面2',
                                    icon: 'SettingOutlined',
                                },
                            ],
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: '登录成功',
                },
            };
        } else if (username === 'user' && password === 'user') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/home',
                            name: 'home',
                            label: '首页',
                            icon: 'HomeOutlined',
                            url: '/home/index',
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            icon: 'ShopOutlined',
                            url: '/mall/index',
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: '登录成功',
                },
            };
        } else {
            return {
                code: -999,
                data: {
                    message: '密码错误',
                },
            };
        }
    },
};
