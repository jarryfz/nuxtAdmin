import { Message } from 'element-ui';
import { getToken } from '~/utils/auth';
import qs from 'qs';
export const serialize = data => {
    let list = [];
    Object.keys(data).forEach(ele => {
        list.push(`${ele}=${data[ele]}`)
    })
    return list.join('&');
};
export default function ({store, redirect, app: { $axios }})  {
    let isClient = process.client;
    let isServer = process.server;
	// 数据访问前缀
	$axios.defaults.baseURL = 'http://www.zrfc.com/';
  // $axios.defaults.withCredentials=true;
    // request拦截器，我这里设置了一个token，当然你可以不要
	$axios.onRequest(config => {
    if(isClient){
      if (config.method === 'post') {
        config.data = qs.stringify(config.data)
      }
      console.log(isServer,isClient)
      // console.log(getToken(),store.getters.token)
      config.headers.common['content-type'] = 'application/x-www-form-urlencoded'
      config.headers.common['token'] = getToken()
    }
    if(isServer){
      // console.log(config)
      // if (config.method === 'post') {
      //   config.data = qs.stringify(config.data)
      // }
      // config.headers['content-type'] = 'application/x-www-form-urlencoded'
      // config.headers.common['token'] = store.getters.token

    }
    return config
	})
	$axios.onError(error => {
		return error
	})
	// response拦截器，数据返回后，你可以先在这里进行一个简单的判断
  $axios.interceptors.response.use(response => {
      // console.log(response)
    // return Promise.resolve(response.data);
        const res = response.data
        const status = Number(response.status) || 200;
        //如果请求为200则放过，否者默认统一处理,或者在website中配置statusWhiteList白名单自行处理
        if (res.code !== 200) {
            Message({
            message: res.message || 'Error',
            type: 'error',
            duration: 5 * 1000
            })

            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log(error);
        return Promise.reject(new Error(error));
    })
}
