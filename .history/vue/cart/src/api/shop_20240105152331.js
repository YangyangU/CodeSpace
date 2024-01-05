//shop
//每个模块的接口一个文件

// vuex 读|写 不能随便修改，流程

// _下划线，私有，只在本模块
const _products = [
    { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
    { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
    { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

export default{
    //阅读后端接口文档，actions要调用的方法
    getProducts(cb){
        //模拟了ajax要花时间
        //callback await getProducts
        //return promise
        setTimeout(()=>cb(_products),100)//模拟请求时间
    }
}