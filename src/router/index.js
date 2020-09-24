import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '@/vistas/Inicio'
import EncuestaEvaluado from '@/vistas/Encuestas/EncuestaEvaluado'
import CrearCargo from '@/vistas/Cargo/CrearCargo'
import ListarCargo from '@/vistas/Cargo/ListarCargo'
import EditarCargo from '@/vistas/Cargo/EditarCargo'
import CrearRol from '@/vistas/Rol/CrearRol'
import ListarRol from '@/vistas/Rol/ListarRol'
import EditarRol from '@/vistas/Rol/EditarRol'
import CrearTipoproceso from '@/vistas/Tipoproceso/CrearTipoproceso'
import ListarTipoproceso from '@/vistas/Tipoproceso/ListarTipoproceso'
import EditarTipoproceso from '@/vistas/Tipoproceso/EditarTipoproceso'
import CrearProceso from '@/vistas/Proceso/CrearProceso'
import ListarProceso from '@/vistas/Proceso/ListarProceso'
import EditarProceso from '@/vistas/Proceso/EditarProceso'

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
    },
    {
      path: '/crear_rol',
      name: 'CrearRol',
      component: CrearRol
    },
    {
      path: '/lista_cargo',
      name: 'ListarRol',
      component: ListarRol
    },
    {
      path: '/roles/:rolId/editar_rol',
      name: 'EditarRol',
      component: EditarRol
    },
    {
      path: '/crear_tipoproceso',
      name: 'CrearTipoproceso',
      component: CrearTipoproceso
    },
    {
      path: '/lista_tipoproceso',
      name: 'ListarTipoproceso',
      component: ListarTipoproceso
    },
    {
      path: '/tipoprocesos/:tipoprocesoId/editar_tipoproceso',
      name: 'EditarTipoproceso',
      component: EditarTipoproceso
    },
    {
      path: '/crear_proceso',
      name: 'CrearProceso',
      component: CrearProceso
    },
    {
      path: '/lista_proceso',
      name: 'ListarProceso',
      component: ListarProceso
    },
    {
      path: '/procesos/:procesoId/editar_proceso',
      name: 'EditarProceso',
      component: EditarProceso
    }
  ],
  mode: 'history'
  })
