/*
*
*用户的相关文档
*/

import request from '@/utils/request.js'

export const userLogin = (user) => {
  return request({
    method: 'post',
    url: '/app/v1_0/authorizations',
    data: user
  })
}
