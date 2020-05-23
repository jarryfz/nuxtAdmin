<template>
  <div class="main" id="app">
    <el-container>
      <el-header>
        <span class="el-icon-menu" @click="openMenu"></span>
      </el-header>
      <el-container>
        <el-aside >
          <el-menu
            default-active="index"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            @select="select"
            :collapse="isCollapse">
             <el-menu-item index="/">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/user">user</el-menu-item>
                <el-menu-item index="/admin">admin</el-menu-item>
                <el-menu-item index="/frond">frond</el-menu-item>
                <el-submenu index="first">
                     <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航2</span>
                      </template>
                    <el-menu-item-group>
                      <el-menu-item index="/first/1-3">选项3</el-menu-item>
                      <el-menu-item index="/first/1-4">选项3</el-menu-item>
                      <el-menu-item index="/first/1-5">选项3</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index='news'>
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>news</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/news/modules">modules</el-menu-item>
                <el-menu-item index="/news/list">list</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="4" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
           
          </el-menu>
        </el-aside>
        <el-main>
          <nuxt/>
        </el-main>
      </el-container>
      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  async asyncData (ctx) {
    // console.log(ctx)
    return ctx
  },
  // layOut: 'head'
  data() {
    return {
      isCollapse: false
    }
  },
  created() {
    // console.log(this.$router.currentRoute)
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    select(index,indexPath) {
      // console.log(index,indexPath)
      // this.$router.push({path: index}) 
    },
    openMenu() {
      if(this.isCollapse){
        this.isCollapse = false
      }else{
        this.isCollapse = true
      }
    }
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
  width: auto !important;
}
.el-menu{
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }
.el-main {
  background-color: #E9EEF3;
  color: #333;
  height: 100%;
}
</style>