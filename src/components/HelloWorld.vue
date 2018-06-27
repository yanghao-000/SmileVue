<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
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
@import '../assets/less/mixins.less';
.van-button {
  font-size: 0.32rem;
  .rem(font-size, 12);
  width: 100px;
  height: 40px;
  line-height: 40px;
  p {
    font-size: 12px;
  }
}
</style>
