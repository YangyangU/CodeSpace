import axios from 'axios';

const baseUrl = 'http://ustbhuangyi.com/sell/';

//直接抛出
export function get(url){
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

// export default get //只能抛一个

let resFn = get('/seller')()//传入一个路径后半段，就能拿到数据
resFn().then(data =>{

})