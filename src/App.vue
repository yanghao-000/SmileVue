<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// 初始化css
import 'reset-css'
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './assets/less/global.less';
</style>
