import type { Banner } from "../models/banner"
// 有完整的编译阶段 ts-> js->

// 后端api 业务代码 广告位 
export async function useBanner(){
    //前端也有了数据校验了，要说不，为用户负责 ts 接口
    const banners = await http.get('/banner',{type:1})
    return banners
}