import { sign } from '@/utils/jwt'

export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === '123456') {
      return {
        code: 20000,
        data: {
          menu: [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'HomeFilled',
                url: 'Home'
            },
            {
                path: '/mall',
                name: 'mall',
                label: '商品管理',
                icon: 'VideoPlay',
                url: 'Mall'
            },
            {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'UserFilled',
                url: 'User'
            },
            {
                label: '其他',
                icon: 'LocationFilled',
                children: [
                    {
                        path: '/page1',
                        name: 'page1',
                        label: '页面1',
                        icon: 'Setting',
                        url: 'PageOne'
                    },
                    {
                        path: '/page2',
                        name: 'page2',
                        label: '页面2',
                        icon: 'Setting',
                        url: 'PageTwo'
                    }
                ]
            }
          ],
          token: sign({ username, password }),
          message: '登录成功'
        }
      }
    } else if (username === 'user' && password === '123456') {
      return {
        code: 20000,
        data: {
          menu: [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'HomeFilled',
                url: 'Home'
            },
            {
                path: '/mall',
                name: 'mall',
                label: '商品管理',
                icon: 'VideoPlay',
                url: 'Mall'
            },
            {
                label: '其他',
                icon: 'LocationFilled',
                children: [
                    {
                        path: '/page1',
                        name: 'page1',
                        label: '页面1',
                        icon: 'Setting',
                        url: 'PageOne'
                    },
                    {
                        path: '/page2',
                        name: 'page2',
                        label: '页面2',
                        icon: 'Setting',
                        url: 'PageTwo'
                    }
                ]
            }
          ],
          token: sign({ username, password }),
          message: '登录成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }

  }
}