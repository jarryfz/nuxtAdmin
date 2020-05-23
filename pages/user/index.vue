<template>
  <div>
    <!-- user/index -->
    <!-- {{info}} -->
    <!-- {{name}} -->
    <div>
      guisygfhsdyhugfdyhusgfyu更好发挥就合适的官方电话就是过分的话就是·黄金时代规范和监督施工方好卡
      发货的嘎是否经过打算付款计划盛开的菊花附件打开历史记录是的路口附近的加上佛教麦克雷开飞机的开发击破看见了开放了绝对实力JFK决定是否考虑静安寺
      返回的是科技股份回到i还可了解到富士康垃圾啊反扒警方那就好
    </div>
  </div>
</template>
<script>
export default {
  layout: 'head',
  data() {
    return {
    }
  },
  async asyncData(context) {
    // console.log(context)
    let param = {
      username: 'admin',
      password: 123456
    } 
    let { data } = await context.$axios.post('api/v1/user/login',param)
      console.log(data)
      
    // return { 
    //   info: data
    //  }
  },
  created() {
    let param = {
      username: 'admin',
      password: 123456
    }
    // this.$axios.post('api/v1/user/login',param).then(res => {
    //   console.log(this.$data.info)
    // })
     
  }
}
</script>