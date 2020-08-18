<template>
  <div id="app">
    <div id="nav">
      <router-link to="/blogs">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/tools">开发小工具</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
