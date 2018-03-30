import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Hungry from '@/components/Hungry'
import Supply from '@/components/Supply'
import Order from '@/components/Order'
import Validate from '@/components/Validate'
import End from '@/components/End'

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
    },
    {
      path: '/supply',
      name: 'supply',
      component: Supply
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/validate',
      name: 'validate',
      component: Validate
    },
    {
      path: '/end',
      name: 'end',
      component: End
    }

  ]
})
