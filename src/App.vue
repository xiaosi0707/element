<template>
  <div id="app">
    <router-view/>
    <el-footer style="height: 42px;">
      <router-link to="">外卖</router-link>
      <router-link to="">搜索</router-link>
      <router-link to="">订单</router-link>
      <router-link to="/my">我的</router-link>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .el-footer {
    width: 100%;
    background: #3190e8;
    padding: 0;
    line-height: 42px;
    position: fixed;
    bottom: 0;
    a {
      display: inline-block;
      width: 24%;
      text-align: center;
      color: white;
    }
  }
}

</style>
