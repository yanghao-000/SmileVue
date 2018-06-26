<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button)
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'smile'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/less/mixins.less'; /*引入公共样式*/
.van-button {
  font-size: 0.32rem;
  .px2rem(font-size, 12);
  width: 100px;
  height: 40px;
  line-height: 40px;
  p {
    font-size: 12px;
  }
}
</style>
