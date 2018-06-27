<template>
  <div class="ShoppingMall">
    <!--search bar layout-->
    <div class="search-bar">
      <van-row>
        <van-col span="3" class="location"><i class="iconfont icon-location"></i></van-col>
        <van-col span="16" class="search">
          <input type="text" class="search-input" placeholder="输入商品"/>
        </van-col>
        <van-col span="5" class="search-btn">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!--swipwer area-->
    <div class="swiper-area">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
                <img v-lazy="banner.image"/>
            </van-swipe-item>
        </van-swipe>
    </div>
    <!-- type-bar -->
    <van-row class="type-bar" type="flex" justify="space-around">
      <van-col span="4" v-for="(cate, i) in category" :key="i">
        <img v-lazy="cate.image" width="90%" />
        <span>{{cate.mallCategoryName}}</span>
      </van-col>
    </van-row>
    <!--AD banner area-->
    <div class="ad-banner">
        <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
    </div>
    <!--Recommend goods area-->
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <!--swiper-->
        <swiper :options="swiperOption" class="recommend-swiper">
          <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%" />
              <div class="name">{{item.goodsName}}</div>
              <div class="price">
                ￥{{item.price}}
                <span>(￥{{item.mallPrice}})</span>
              </div>
            </div>
          </swiper-slide>
      </swiper>
      </div>
    </div>
    <!--floor one area-->
    <div class="floor">
      <div class="floor-title">1floor</div>
      <div class="floor-anomaly">
        <div>
          <div class="floor-one"><img :src="floor1_0.image" alt=""></div>
        </div>
        <div>
          <div class="floor-two"><img :src="floor1_1.image" alt=""></div>
          <div class="floor-three"><img :src="floor1_2.image" alt=""></div>
        </div>
      </div>
      <div class="floor-rule">
        <div v-for="(item ,index) in floor1.slice(3)" :key="index">
            <img :src="item.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHome } from '@/api/index'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      msg: 'shoppingmall',
      // res: '',
      bannerPicArray: '',
      category: '',
      adBanner: '',
      recommendGoods: [],
      swiperOption: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      floor1: '',
      floor1_0: '',
      floor1_1: '',
      floor1_2: ''
    }
  },
  created () {
    // this.getRes()
    getHome().then(response => {
      console.log(response)
      if (response.status === 200) {
        this.category = response.data.data.category
        this.adBanner = response.data.data.advertesPicture
        this.bannerPicArray = response.data.data.slides
        this.recommendGoods = response.data.data.recommend
        this.floor1 = response.data.data.floor1
        this.floor1_0 = this.floor1[0]
        this.floor1_1 = this.floor1[1]
        this.floor1_2 = this.floor1[2]
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    // async getRes () {
    //   this.res = (await getHome()).data
    // }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang='less'>
  @import '../../assets/less/base.less';
  .search-bar{
    .rem(height, 88);
    .rem(line-height, 88);
    background-color: @bg;
    text-align: center;
    overflow: hidden;
    .location{
      .iconfont{
        color: #fff;
        .rem(font-size, 40);
      }
    }
    .search{
      input{
        display: block;
        width: 100%;
        .rem(height, 70);
        background: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        .rem(font-size, 28);
        color: #fff;
        .rem(text-indent, 20);
        &::-webkit-input-placeholder{
            color:#fff;
        }
      }
    }
    .search-btn{
      .van-button{
        width: 80%;
        .rem(height, 50);
        .rem(line-height, 50);
        .rem(font-size, 28);
        color: @bg;
      }
    }
  }
  .swiper-area{
      .rem(height, 334);
      overflow: hidden;
      .van-swipe{
          width: 100%;
      }
      img{
          width: 100%;
          display: block;
      }
  }
  .type-bar{
    text-align: center;
    .rem(padding, 20, 0);
    .rem(margin-top, 12);
    background-color: #fff;
    div{
      img{
        width: 80%;
        margin: 0 auto;
        display: block;
        border: none;
        .rem(margin-bottom, 14);
      }
      span{
        .rem(font-size, 26);
        color: #999;
      }
    }
  }
  .ad-banner{
    .rem(padding, 12, 0, 24, 0);
  }
  .recommend-area{
    background-color: #fff;
    .recommend-title{
      .rem(padding, 20, 20);
      border-bottom:1px solid #ddd;
      .rem(font-size, 28);
      color: @bg;
    }
    .recommend-body{
      .recommend-swiper{
        .rem(font-size, 24);
        img{
          margin: 0 auto;
          display: block;
        }
        .name{
          .rem(margin-bottom, 12);
          word-break: break-all;
        }
        .name,.price{
          .rem(padding, 0, 14);
          span{
            text-decoration: line-through;
          }
        }
      }
    }
  }
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
      border-bottom: 1px solid #ccc;
      div{
        box-sizing: border-box;
        &.floor-one{
          border-right: 1px solid #ccc;
          // border-bottom: 1px solid #ddd;
        }
        &.floor-two{
          border-bottom: 1px solid #ccc;
        }
        &.floor-three{
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
        &:nth-child(odd){
          border-right: 1px solid #ccc;
        }
      }
    }
  }
</style>
