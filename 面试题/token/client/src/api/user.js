import { post } from "./index.js";

export function login(body){
    return post('/login',body).then(res=>res.data)
}

export function home(body){
    return post('/home',body).then(res=>res.data)
}