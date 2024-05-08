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

export const deleteUser = (data)=>{
    return http.post('/user/delete',data)
}

export const updateUser = (data)=>{
    return http.post('/user/update',data)
}

export const getMenu = (params)=>{
    return http.post('/permission/getMenu',params)
}