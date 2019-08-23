import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 添加一个请求拦截器
request.interceptors.request.use(function (config) {
  // 在请求发出之前进行一些操作
  return config
}, (error) => {
  return Promise.reject(error)
})
// 添加一个响应拦截器
request.interceptors.response.use(function (res) {
  // 在这里对返回的数据进行处理
  return res
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default request
