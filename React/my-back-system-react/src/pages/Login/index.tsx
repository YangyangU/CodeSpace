import React from 'react';
import './index.css';
import { Form, Input, Button, message } from 'antd';
import { getMenu } from '@/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMenuList } from '@/store/reducers/tabs';
import Auth from '@/router/Auth';

const View: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const handleSubmit = (values: { username: string; password: string }) => {
        getMenu(values)
            .then((res) => {
                if (res.code === 20000) {
                    messageApi.open({
                        type: 'success',
                        content: '登录成功',
                    });
                    navigate('/home');
                    dispatch(setMenuList(res.data.menu));
                    localStorage.setItem(
                        'my-back-token',
                        JSON.stringify(res.data.token),
                    );
                } else if (res.code === -999) {
                    messageApi.open({
                        type: 'error',
                        content: res.data.message,
                    });
                }
            })
            .catch((res) => {
                messageApi.open({
                    type: 'error',
                    content: res.data.message,
                });
            });
    };
    return (
        <Auth>
            <Form className="login-container" onFinish={handleSubmit}>
                {contextHolder}
                <div className="login-title">登录</div>
                <Form.Item
                    label="账号"
                    name="username"
                    rules={[{ required: true, message: '请输入账号' }]}
                >
                    <Input placeholder="账号" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="密码"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password placeholder="密码" />
                </Form.Item>
                <Form.Item className="login-button">
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Auth>
    );
};

export default View;
