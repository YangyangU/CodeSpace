import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthRoute } from './components/AuthRoute';// 路由守卫组件

import Login from './pages/login'
import Layout from './pages/layout'

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Routes>
                    <Route path='/' element={<AuthRoute><Layout /></AuthRoute>}></Route>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;