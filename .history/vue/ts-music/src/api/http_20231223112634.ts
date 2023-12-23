interface Http{
    // ? 可选 unknown
    // 返回值   难点跟亮点
    get<T>(url:string,params?:unknown):Promise<T>
}
const http: Http = {
    get(url,params){
        return
    }
}

export default http