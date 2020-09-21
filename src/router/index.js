import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '@/vistas/Inicio'
import EncuestaEvaluado from '@/vistas/Encuestas/EncuestaEvaluado'


Vue.use(Router)

export default new Router({
  mode: history,
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      meta: {layout : 'blank'},
      component: () => import('../vistas/Autentificacion/Login.vue')
    },
    {
      path: '/inicio',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/encuesta_evaluado',
      name: 'EncuestaEvaluado',
      component: EncuestaEvaluado
    }
  ],
  mode: 'history'
  })
