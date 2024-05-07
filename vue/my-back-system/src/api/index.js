import http from '@/utils/request'

export const getData = ()=>{
    return http.get('/home/getData')
}

export const getUser = (params)=>{
    return http.get('/user/getUser',params)
}

export const addUser = (data)=>{
    return http.post('/user/add',data)
}

export const deleteUser = ()=>{
    return http.post('/user/delete',params)
}

export const updateUser = ()=>{
    return http.post('/user/update',params)
}