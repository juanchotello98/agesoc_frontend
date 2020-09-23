import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '@/vistas/Inicio'
import EncuestaEvaluado from '@/vistas/Encuestas/EncuestaEvaluado'
import CrearCargo from '@/vistas/Cargo/CrearCargo'
import ListarCargo from '@/vistas/Cargo/ListarCargo'
import EditarCargo from '@/vistas/Cargo/EditarCargo'

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
    },
    {
      path: '/crear_cargo',
      name: 'CrearCargo',
      component: CrearCargo
    },
    {
      path: '/lista_cargo',
      name: 'ListarCargo',
      component: ListarCargo
    },
    {
      path: '/cargos/:cargoId/editar_cargo',
      name: 'EditarCargo',
      component: EditarCargo
    }
  ],
  mode: 'history'
  })
