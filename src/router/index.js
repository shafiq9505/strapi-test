import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '../components/Authentication/SignIn.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
  ],



  
  
})


