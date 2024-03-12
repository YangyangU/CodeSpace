import axios from "axios";
import router from "../router";

axios.defaults.headers['token']=localStorage.getItem('token')||'';

axios.defaults.baseURL="http://localhost:3000";

//请求拦截
axios.interceptors.request.use(
    (config)=>{
        let token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = token
        }
        return config
    },
    (error)=>{
        //请求错误时做些什么
        return Promise.reject(error)
    }
)

//响应拦截
axios.interceptors.response.use(
    (res)=>{
        if(res.data.code && res.data.code !== 0){//逻辑性错误
            return Promise.reject(res.data.error)
        }
        if(res.data.status >= 400 && res.data.status<500){
            router.push('/login')
            return Promise.reject(res.data)
        }
        return res //响应内容没问题返回
    },
)

export function post(url,body){
    return axios.post(url,body)
}