<template>
  <div>
    <div class="login-form">
      <el-form :model="params"  label-width="100px">
        <el-form-item label="用户名" prop="">
          <el-input v-model="params.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="">
          <el-input v-model="params.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getToken } from '~/utils/auth.js'
export default {
  data() {
    return {
      params: {
        username: 'admin',
        password: '123456'
      },
    }
  },
  mounted(){
    this.$on('emit-todo', function(n) {
        console.log(n)
    })
    this.emitTodo('world');
  },
  methods: {
    emitTodo(n){
      console.log('hello');
      this.$emit('emit-todo', n);
    },
    login() {
      this.isdisabled = true;
      this.$store.dispatch('usernameLogin', this.params).then(() => {
        this.$router.push({path: '/'})
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form{
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -300px;
  margin-top: -300px;
  text-align: center;
}
.el-form-item{
  display: block;
  width: 100%;
}
</style>