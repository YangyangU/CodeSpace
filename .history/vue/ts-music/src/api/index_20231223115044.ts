//没有使用，也会警告
import type { Banner } from "../models/banner.ts";
import http from "./http.ts";
// 有完整的编译阶段 ts-> js->

// 后端api 业务代码 广告位 
export async function useBanner(){
    //前端也有了数据校验了，要说不，为用户负责 ts 接口
    //http.get<>泛型 返回值的类型是 Banner 数组
    const {banners} = await http.get('/banner',{type:1});
    return banners
}