import { get } from './axios.js' //export往外抛的是对象要{} export default不用

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')

export {
    getSeller,
    getGoods
}