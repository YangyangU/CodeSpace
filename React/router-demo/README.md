- yarn add react-router-dom@6

# BrowserRouter , HashRouter
1. history模式和 hash模式

# Link
to属性用于跳到指定路径

# Routes
路由的出口 类似于 vue 的 router-view

# Route
单个路由匹配 path匹配路径 element 匹配组件

# useNavigate
const navigate = useNavigate()//方法

# 路由传参
1. **? + useSearchParams**
    - 传参
        navigate('/about?id=123')
    - 接收参数
        let [ params ] = useSearchParams()  console.log(params.get('id'))

2. **: + useParams**
    - 传参
        navigate('/about/100')  <Route path='/about/:id' element={<About></About>}></Route> 
    - 接收参数
        let params = useParams() console.log(params);

3. state
    - 传参
    - 接受参数