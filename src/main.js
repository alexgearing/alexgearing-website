import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerGlobalComponents from '@/utils/registerGlobalComponents'
import '@/assets/scss/index.scss'
import i18n from './i18n'
import VueAgile from 'vue-agile'

Vue.use(VueAgile)

Vue.config.productionTip = false

registerGlobalComponents()

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
