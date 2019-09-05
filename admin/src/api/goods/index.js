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

// module.exports={
//   getGoodsCat,
//   getGoodsList
// }