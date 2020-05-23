
/**
 * 
 */
import Cookies from 'js-cookie'
const Tokenkey = 'token';
export function getToken() {
  // return window.localStorage.getItem(Tokenkey);
  return Cookies.get(Tokenkey)
}
export function setToken(token){
  // return window.localStorage.setItem(Tokenkey,token);
  return Cookies.set(Tokenkey,token)
}
export function removeToken(){
  // return window.localStorage.removeToken(Tokenkey);
  return Cookies.remove(Tokenkey);
}