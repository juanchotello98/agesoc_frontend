import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Login from '@/components/Autentificacion/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/inicio',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ],
  mode: 'history'
})
