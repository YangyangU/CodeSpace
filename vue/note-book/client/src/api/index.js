import axios from 'axios';
import { showFailToast } from 'vant';
import store from '../store';
import router from '../router';


axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json'

//请求拦截
axios.interceptors.request.use(
    (config)=>{
        let token = store.state.token
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
        if(res.status!==200){//程序错误
            showFailToast('服务端异常');
        }
        else{
            if(res.data.code!== '8000'){//逻辑错误
                if(res.data.status === 401){
                    localStorage.removeItem('my-app-store')
                    router.push('/login')
                    showFailToast(res.data.message);
                }else{
                    showFailToast(res.data.msg)
                    return Promise.reject(res)
                }
            }
            else{
                // showSuccessToast(res.data.msg)
                return res.data
            }
        }
    },
    (error)=>{
        return Promise.reject(error)
    }
)


export default axios  //抛出封装后的axios