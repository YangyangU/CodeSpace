import httpInstance from '@/utils/http.js';

export const getCategoryAPI = () =>{
    return httpInstance({
        url:'/home/category/head'
    })
}
