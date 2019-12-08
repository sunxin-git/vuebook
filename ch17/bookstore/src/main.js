import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { currency, factPrice, formatTime } from './utils/filters'
import msgBox from './plugin/vue-msgbox'
import {Pagination} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueAxios, axios) //安装插件
Vue.use(msgBox)
Vue.use(Pagination)

axios.defaults.baseURL = "/api"
Vue.config.productionTip = false


Vue.filter('currency', currency)
Vue.filter('factPrice', factPrice)
Vue.filter('formatTime', formatTime)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
