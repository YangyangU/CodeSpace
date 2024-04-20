import { BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom';
import Home from './views/Home'
import Layout from './views/Layout';
import Article from './views/layout-views/Article';
import Publish from './views/layout-views/Publish';

const App2 = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/layout" element={<Layout></Layout>}>
                        {/* 二级路由 */}
                        <Route path='' element={<Navigate to='/layout/article'></Navigate>}></Route>
                        <Route /* index */ path='article' element={<Article></Article>}></Route>
                        <Route path='publish' element={<Publish></Publish>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App2;