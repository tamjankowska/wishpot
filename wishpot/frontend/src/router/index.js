import Vue from 'vue'
import Router from 'vue-router'
import UserSignup from '@/components/UserSignup'
import UserLogin from '@/components/UserLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'UserLogin'
      }
    },
    {
      path: '/login',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: UserSignup
    }
  ]
})
