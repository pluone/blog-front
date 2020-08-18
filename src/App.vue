<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {Header}
}
</script>
<style>
#app {
  font-family: "Hiragino Sans GB","PingFang SC","Microsoft YaHei","微软雅黑","Helvetica Neue",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 70%;
  margin: 0 auto;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
