// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import './assets/styles/border.css'
import 'swiper/dist/css/swiper.css'
import FastClick from 'fastclick'
import HomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
FastClick.attach(document.body)

Vue.use(router)
Vue.use(HomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
