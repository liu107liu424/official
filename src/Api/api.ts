import axios from './axios'

export default {
  /**获取首页轮播图 */
  maxImg: () => {
    return axios.get('/maxImg')
  },
  /**获取商品列表 */
  getGoods: (val: any) => {
    return axios.get('/getGoods', { params: val })
  },
  /**获取商品详情 */
  goodsInfo: (val: string) => {
    return axios.get('/goodsInfo?id=' + val)
  }
}