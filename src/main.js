// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/config/global'
import axios from 'axios'
import '@/assets/css/app.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(ElementUI, VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.create({
  headers: {
    'Content-Type': 'application/wyunei'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
