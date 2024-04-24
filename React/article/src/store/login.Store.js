import { makeAutoObservable } from "mobx";
import { http,setToken } from "@/utils";

class LoginStore {
    token = ''
    constructor() {
        makeAutoObservable(this)
    }
    async login({username,password}){
        const res = await http.post('/authorizations',{
            mobile: username,
            code: password,
        })
        console.log(res);
        setToken(res.data.token)//存到本地
        this.token = res.data.token
        // console.log(this.token);
    }
    // login({ username, password }) {
    //     const res = http.post('/authorizations', {
    //         mobile: username,
    //         code: password,
    //     })
    // }
}

export default LoginStore