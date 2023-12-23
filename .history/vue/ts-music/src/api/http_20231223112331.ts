interface Http{
    get<T>(url:string,params?:unknown):Promise<T>
}
const http: Http = {
    get(url,params){

    }
}

export default http