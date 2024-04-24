import axios from 'axios'
import { getToken } from '@/utils'

const http = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000,
})

//请求拦截
http.interceptors.request.use((config) => {
    const token = getToken()
    if(token){
        config.headers.Authorization = `Bearer ${token}`//固定格式
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

//响应拦截
http.interceptors.response.use((response) => {
    return response.data
},(error)=>{
    return Promise.reject(error)
})


export { http }