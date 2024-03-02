import httpInstance from "@/utils/http";

export const getDetail = (id)=>{
    return httpInstance({
        url: '/goods',
        params:{
            id
        }
    })
}