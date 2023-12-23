// 有完整的编译阶段 ts-> js->

// 后端api 业务代码 广告位 
export async function useBanner(){
    const banners = await http.get('/banner',{type:1})
    return banners
}