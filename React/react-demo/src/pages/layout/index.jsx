import React from 'react';
import { Flex, Layout } from 'antd';
import { Outlet,useNavigate } from 'react-router-dom';
import './index.css';
const { Header, Sider, Content } = Layout;


const LayoutWrap = () => {
    const data = [
        {id:1,title:'班级人员',path:'/layout/students'},
        {id:2,title:'就业数据',path:'/layout/employment'},
        {id:3,title:'个人详情',path:'/layout/personal'},
    ]
    const navigate = useNavigate();

    return (
        <div className='layout'>
            <Layout>
                <Header className='hd'>
                    <h2>旅梦后台管理系统</h2>
                    <p>欢迎，阳阳羊</p>
                </Header>
                <Layout>
                    <Sider width="200px" className='side'>
                        <ul>
                            {
                                data.map(item=>(
                                    <li key={item.id} className='aside-item' onClick={()=>navigate(item.path)}>{item.title}</li>
                                ))
                            }
                        </ul>
                    </Sider>
                    <Content>
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default LayoutWrap;