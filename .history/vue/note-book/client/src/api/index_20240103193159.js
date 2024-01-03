import axios from 'axios';
import {showFailToast } from 'vant';

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json'


//请求拦截


//响应拦截
axios.interceptors.response.use(res=>{
    if(res.status!==200){//程序错误

    }
})