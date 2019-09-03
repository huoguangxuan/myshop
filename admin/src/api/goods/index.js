import request from '@/utils/request'

export function getGoodsList() {
  return request({
    url: '/goods/list',
    method: 'get',
    params: { token }
  })
}


export function getGoodsCat() {
  return request({
    url: '/goods/cat',
    method: 'get',
    params: { token }
  })
}