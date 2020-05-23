import { setToken,removeToken } from '~/utils/auth.js'
const state = {
  token: '',
  userId: '',
  username: ''
}

export default {
  namespaced: true,
  state,
  mutations: {
    // SET_TOKEN (state, token) {
    //    state.token = token
    // }
  },
  actions: {
    // usernameLogin({commit},param) {
    //   return new Promise((resolve) => {
    //     this.$axios.post('api/v1/user/login',param).then(res => {
    //       console.log(res)
    //       commit('SET_TOKEN',res.data.token);
    //       setToken(res.data.token);
    //       this.$router.push({path: '/'})
    //       resolve();
    //     })
    //   })
    // },
    // // 登出
		// LogOut({ commit }) {
		// 	return new Promise((resolve /*, reject*/) => {
		// 		commit('SET_TOKEN', '');
    //     removeToken();
    //     this.$router.push('/')
		// 		resolve();
		// 	})
		// },
  }
}