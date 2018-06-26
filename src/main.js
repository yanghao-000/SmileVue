import Vue from 'vue'
import App from './App'
import router from './router'
// 设计稿750  设计稿大小除以50
import 'vue-ydui/dist/ydui.flexible'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
