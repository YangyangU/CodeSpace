import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/login'
import Layout from './pages/layout'

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Routes>
                    <Route path='/' element={<Layout />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;