import axios from 'axios'; //导入axios

//区分于fatch xhr vue应用，复用，App而不是页面统一管理
//所有的请求前面加上baseURL 地址
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.default.timeout = 10*1000; //上传时间
axios.defaults.maxBodyLength = 5*1024*1024; //图片

const http = {
    get(url, params = {}){
        //能return promise 就能被await
        return new Promise()
    }
}

export default http