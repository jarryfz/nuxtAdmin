<template>
  <div class="main" id="app">
   <nuxt/>
  </div>
</template>
<script>
export default {
  async asyncData (ctx) {
    return ctx
  },
  // layOut: 'head'
  data() {
    return {
      cxt: 'ctx'
    }
  },
  created() {
    // console.log(this.$router.currentRoute)
  },
  methods: {
  
  }
}
</script>
<style>
html{
  height: 100%;
}
#__nuxt{
  height: 100%;
}
#__layout{
  height: 100%;
}
html body{
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100%;
}
.main{
  height: 100%;
}
.el-container{
  height: 100%;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  height: 60px;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 100%;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  height: 100%;
}
</style>