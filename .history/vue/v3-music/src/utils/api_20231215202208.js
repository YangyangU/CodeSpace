import http from '@/utils/http';
// 模块，前后端 交流 数据模块封装
// localhost:3000/banner //轮播图 axios

export async function getBanner(){
    // get 统一 http
    const {banners} = await http.get('/banner',{type:1})
    return banners
}

//搜索的
export async function getSearchSuggest(keyword) {
    const {suggestions} = await http.get('/search',海阔天空)
    return suggestions
}