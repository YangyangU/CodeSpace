import { makeAutoObservable } from "mobx";
import { http } from "@/utils";

class LoginStore {
    token = ''
    constructor() {
        makeAutoObservable(this)
    }
    // async login({username,password}){
    //     const res = await http.post('/authorizations',{
    //         mobile: username,
    //         code: password,
    //     })
    //     console.log(res);
    // }
    login({ username, password }) {
        return http.post('/authorizations', {
            mobile: username,
            code: password,
        })
    }
}

export default LoginStore