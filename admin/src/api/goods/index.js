import request from '@/utils/request'

export function getGoodsList() {
  return request({
    url: '/goods/list',
    method: 'get',
    params: { token }
  })
}


export function getGoodsCat(token) {
  return request({
    url: '/api/v1/goods/cate',
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
//删除分类
export function destroyCate(id) {
  return request({
    url: `/goods/cate/destroy/${id}`,
    method: 'delete',
  })
}
module.exports={
  getGoodsCat,
  getGoodsList,
  addCate,
  destroyCate
}