import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Myinfo from '@/components/Myinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Myinfo/:index',
      name: 'Myinfo',
      component: Myinfo
    }
  ]
})
