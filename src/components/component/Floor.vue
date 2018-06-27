<template>
  <div>
    <!--floor one area-->
    <div class="floor">
      <div class="floor-title">{{ floorTitle }}</div>
      <div class="floor-anomaly">
        <div class="box">
        <div class="floor-one"><img :src="floorData0.image" alt=""></div>
        </div>
        <div class="box">
        <div class="floor-two"><img :src="floorData1.image" alt=""></div>
        <div class="floor-three"><img :src="floorData2.image" alt=""></div>
        </div>
      </div>
      <div class="floor-rule">
        <div v-for="(item ,index) in floorData.slice(3)" :key="index">
            <img :src="item.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'floorData',
    'floorTitle'
  ],
  data () {
    return {
      floorData0: {},
      floorData1: {},
      floorData2: {}
    }
  },
  created () {},
  watch: {
    floorData (newValue, oldValue) {
      this.floorData0 = this.floorData[0]
      this.floorData1 = this.floorData[1]
      this.floorData2 = this.floorData[2]
    }
  }
}
</script>

<style scoped lang="less">
@import '../../assets/less/base.less';
.floor{
  .rem(margin-top, 20);
  background-color: #fff;
  .floor-title{
    .rem(padding, 20, 20);
    border-bottom:1px solid #ccc;
    .rem(font-size, 28);
    color: @bg;
    text-align: center;
  }
  img{
    width: 100%;
    display: block;
    border: none;
  }
  .floor-anomaly{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    border-bottom: 1px solid #ccc;
    .box{
      width: 50%;
    }
    div{
      box-sizing: border-box;
      &.floor-one{
        // border-bottom: 1px solid #ddd;
      }
      &.floor-two{
        border-left: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      }
      &.floor-three{
        border-left: 1px solid #ccc;
        // border-bottom: 1px solid #ddd;
      }
    }
  }
  .floor-rule{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    div{
      width: 50%;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      &:nth-child(even){
        border-left: 1px solid #ccc;
      }
    }
  }
}
</style>
