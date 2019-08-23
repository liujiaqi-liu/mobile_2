import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
import store from '@/store/store.js'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/style/index.less'

import zhCN from 'vee-validate/dist/locale/zh_CN' // 引入中文包，提示信息可以以中文形式显示
import VeeValidate, { Validator } from 'vee-validate'

Vue.use(VeeValidate, {
  events: 'blur'
})
Validator.localize('zh_CN', zhCN)// 设置提示信息中文方式显示

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
