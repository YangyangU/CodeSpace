
import { BrowserRouter, Link, Routes, Route, useNavigate, useSearchParams, useParams } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>this is home page</h1>
            {/* <button onClick={() => navigate('/about?id=123',{replace:true})}>跳去关于页面</button> */}
            <button onClick={() => navigate('/about/100',{replace:true})}>跳去关于页面</button>
            {/* replace:ture 替换当前路由，不产生历史记录 */}
        </div>
    )
}
const About = () => {
    //第一种
    // let [ params ] = useSearchParams()//数组解构
    // console.log(params.get('id'));

    //第二种
    let params = useParams()
    console.log(params);
    return (
        <div>
            <h1>this is about page</h1>
        </div>
    )
}

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Link to='/'>首页</Link>|
                <Link to='/about'>关于</Link>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/about/:id' element={<About></About>}></Route>
                </Routes>

            </BrowserRouter>
        </div>
    );
};

export default App;