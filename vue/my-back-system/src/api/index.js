import http from '@/utils/request'

export const getData = ()=>{
    return http.get('/home/getData')
}
