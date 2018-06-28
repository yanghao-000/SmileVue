import Vue from 'vue'
import App from './App'
import router from './router'
// 设计稿750  设计稿大小除以50
import 'vue-ydui/dist/ydui.flexible'
// 按需引入
import { Button, Row, Col, Swipe, SwipeItem, Lazyload, List } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
