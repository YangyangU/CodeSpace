import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'

interface Http{
    // ? 可选 unknown
    // 返回值   难点跟亮点 tailwind hooks 编程 use typescript
    get<T>(url:string,params?:unknown):Promise<T>
}
const http: Http = {
    get(url,params){
        return new Promise((resolve,reject)=>{
            axios
            .get(url,{params})
            .then((res)=>{
                resolve(res.data)
            })
            .catch((err)=>{
                reject(err.data);
            })
        })
    }
}

export default http