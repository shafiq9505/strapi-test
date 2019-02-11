// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import veeValidate from 'vee-validate'
import NProgress from 'nprogress'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'

import '../node_modules/nprogress/nprogress.css'

Vue.config.productionTip = false
Vue.use(veeValidate)
Vue.use(router)
Vue.use(VueFire)
Vue.use(VueRouter)
/* eslint-disable no-new */



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


