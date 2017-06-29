import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
/* 重置全局样式 */
import '../../static/css/reset.scss'
/* 引入element-ui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

/* 引入iview */
import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS

Vue.use(ElementUI)

Vue.use(iView)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
