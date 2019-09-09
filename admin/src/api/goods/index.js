import request from '@/utils/request'

export function getGoodsList() {
  return request({
    url: '/goods/list',
    method: 'get',
    params: { token }
  })
}


export function getGoodsCat(token) {
  console.log(token)
  return request({
    url: '/goods/cate',
    method: 'get',
    params: { token }
  })
}
export function addCate(data) {
  return request({
    url: '/goods/cate/add',
    method: 'post',
    data
  })
}
// module.exports={
//   getGoodsCat,
//   getGoodsList
// }