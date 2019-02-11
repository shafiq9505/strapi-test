import Vue from 'vue'
import Router from 'vue-router'
import skill from '@/components/skill'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import Add from '../components/AddItem.vue'
import Edit from '../components/EditItem.vue'
import List from '../components/ListItem.vue'



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name : 'About',
      component : About
    },
    {
      path: '/add' ,
      name : 'Add',
      component : Add
    },
    {
      path: '/edit',
      name : 'Edit',
      component : Edit
    },
    {
      path: '/index',
      name : 'List',
      component : List
    }

  
  
  ],



  
  
})


