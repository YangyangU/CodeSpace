import axios from 'axios';

const baseUrl = 'http://ustbhuangyi.com/sell/';

function get(url){
    return function(params = {}){//参数可以带默认值
        return axios.get(baseUrl + url, {
            params
        }).then(res =>{
            const {errno,data} = res.data;//解构
            if(errno === 0){
                return data
            }
        })
    }
}

get('/seller')()//传入一个路径后半段，就能拿到数据