import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import { setToken,removeToken } from '~/utils/auth.js'
import { Message } from "element-ui";

Vue.use(Vuex)

const store = () => new Vuex.Store({
  getters,
  modules: {
    user
  },
  state: {
    token: ''
  },
  getters: {
    token: state => state.token,
  },
  mutations: {
    SET_TOKEN (state, token) {
       state.token = token
    }
  },
  actions: {
    nuxtServerInit({ commit }, { req }) {
      console.log(req.headers.cookie)
      let token = req.headers.cookie;
      commit('SET_TOKEN', token);
    },
    usernameLogin({commit},param) {
      return new Promise((resolve) => {
        this.$axios.post('api/v1/user/login',param).then(res => {
          console.log(res)
          if(res.code === 200){
            commit('SET_TOKEN',res.data.token);
            setToken(res.data.token);
            Message({
              message: '登录成功',
              type: "success"
            });
          }else{
            Message({
              message: res.msg,
              type: "error"
            });
          }
          resolve();
        })
      })
    },
    // 登出
		LogOut({commit}) {
			return new Promise((resolve /*, reject*/) => {
				commit('SET_TOKEN', '');
        removeToken();
				resolve();
      })
		},
  }
})
export default store