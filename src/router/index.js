import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/sys/home'
import Button from '@/components/sys/button-dev'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    }
  ]
})
