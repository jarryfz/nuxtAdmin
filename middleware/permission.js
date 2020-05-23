/**
 * 权限配置
 */
import { getToken } from '~/utils/auth.js'
import utils from '~/utils/utils'

export default async function({ isHMR, req, redirect,route }) {
  if (isHMR) return
  /* 登录权鉴判断部分 */
  const isClient = process.client // 是否是客户端
  const isServer = process.server // 是否是服务端
  // 服务端从cookie拿token，客户端从local中拿token
  const token = isServer ? utils.getCookieFromReq(req, 'token') : isClient ? getToken() : null
  // console.log(isServer,req.headers)
  /* 无权限访问，跳转到登录页 */
  if (!token && route.name !== 'login') {
    let redirectURL = '/login'
    return redirect(redirectURL)
  }
  else if(token && route.name==='login'){
    let redirectURL = '/'
    return redirect(redirectURL)
  }
}
// export default function ({route, req, res, redirect,store}) {
//   let isClient = process.client;
//   let isServer = process.server;
//   let redirectURL = '/login';
//   var token, path
//   //在服务端
//   if (isServer) {
//     let cookies = utils.getcookiesInServer(req)
//     path = req.originalUrl;
//     token = cookies.token ? cookies.token : ''
//   }
//   //在客户端判读是否需要登陆
//   if (isClient) {
//     token = utils.getcookiesInClient('token')
//     path = route.path;
//   }
//   if (path) {
//     redirectURL = '/login?ref=' + encodeURIComponent(path)
//   }
//   //需要进行权限判断的页面开头
//   if (!token) {
//     redirect({path: '/login'})
//   }
// }
