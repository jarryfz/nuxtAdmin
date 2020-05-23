<template>
  <div class="container">
    <div>
      首页
      <el-button @click="logout">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'head',
  methods: {
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        this.$router.push({ path: "/login" });
      });
    }
  }
}
</script>

<style>

</style>
