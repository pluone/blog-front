<template>
  <div id="app">
    <div id="nav">
      <router-link to="/blogs">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/tools">开发小工具</router-link>
    
      <div class="welcome">
        <span v-show="hasLogin">欢迎您，{{username}} 
          <el-link type="primary" @click="logout">登出</el-link>
        </span>
        <span v-show="!hasLogin"><el-link type="primary" href="/login">登录</el-link></span>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      hasLogin: false
    }
  },
  methods: {
    logout() {
      const _this = this
      this.$axios.get("/logout").then(res => {
        _this.$store.commit("REMOVE_INFO")
        // _this.$router.push('/blogs')
        this.hasLogin = false
      })
    }
  },
  created() {
    if(this.$store.getters.userInfo) {
      this.hasLogin = true
      this.username = this.$store.getters.userInfo.username
    }
  }
}
</script>
<style scoped>
.welcome {
  display: inline-block;
  float: right;
}
</style>