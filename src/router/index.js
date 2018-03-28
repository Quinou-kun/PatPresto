import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Hungry from '@/components/Hungry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/hungry',
      name: 'Hungry',
      component: Hungry
    }

  ]
})
