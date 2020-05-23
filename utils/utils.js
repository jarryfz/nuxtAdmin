import Cookie from 'js-cookie'
export default {
  //获取服务端cookie
  getcookiesInServer:function (req) {
    let service_cookie = {};
    req && req.headers.cookie && req.headers.cookie.split(';').forEach(function (val) {
      let parts = val.split('=');
      service_cookie[parts[0].trim()] = (parts[1] || '').trim();
    });
    return service_cookie;
  },
  //获取客户端cookie
  getcookiesInClient:function (key) {
    return Cookie.get(key) ? Cookie.get(key) : ''
  },
  // 获取request的cookie
  getCookieFromReq: function (req, name){
    // console.log(req.headers)
    if (!req.headers.cookie) return
    const valCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${name}=`))
    if (!valCookie) return
    const val = valCookie.split('=')[1]
    // console.log(val)
    return val

  }
}
