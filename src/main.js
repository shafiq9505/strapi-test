// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import veeValidate from 'vee-validate'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import UUID from 'vue-uuid';
import { Store } from './store'

Vue.config.productionTip = false
Vue.use(veeValidate)
Vue.use(router)
Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(UUID)

/* eslint-disable no-new */



new Vue({
  el: '#app',
  router,
  Store,
  components: { App },
  template: '<App/>'
})

export const store = new Vuex.store({

})


