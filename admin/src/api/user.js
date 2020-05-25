import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/v1/users',
    method: 'get',
  })
}
export function getList() {
  return request({
    url: '/api/v1/users',
    method: 'get',
  })
}
export function addUser(data) {
  return request({
    url: '/api/v1/user/create',
    method: 'post',
    data
  })
}
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
