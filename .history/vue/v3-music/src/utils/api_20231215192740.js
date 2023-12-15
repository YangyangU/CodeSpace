// 模块，前后端 交流 数据模块封装
// localhost:3000/banner //轮播图 axios

export async function getBanner(){
    const {banners} = await http.get('/banner',{type:1})
    return banners
}