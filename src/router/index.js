import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
//import Login from '@/components/vistas/Autentificacion/Login'

Vue.use(Router)

export default new Router({
  mode: history,
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/login',
      name: 'Login',
      meta: {layout: 'blank'},
      //component: () => import('./vistas/Autentificacion/Login.vue')
    }
  ]
  })
