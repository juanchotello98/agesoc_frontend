import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '@/vistas/Inicio'
import EncuestaEvaluado from '@/vistas/Encuestas/EncuestaEvaluado'
import EncuestaEvaluador from '@/vistas/Encuestas/EncuestaEvaluador'
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
import CrearPregunta from '@/vistas/Pregunta/CrearPregunta'
import ListarPregunta from '@/vistas/Pregunta/ListarPregunta'
import EditarPregunta from '@/vistas/Pregunta/EditarPregunta'
import CrearRespuesta from '@/vistas/Respuesta/CrearRespuesta'
import ListarRespuesta from '@/vistas/Respuesta/ListarRespuesta'
import EditarRespuesta from '@/vistas/Respuesta/EditarRespuesta'
import CrearUsuario from '@/vistas/Usuario/CrearUsuario'
import ListarUsuario from '@/vistas/Usuario/ListarUsuario'
import EditarUsuario from '@/vistas/Usuario/EditarUsuario'

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
      path: 'usuarios/:idUsuario/encuesta_evaluado',
      name: 'EncuestaEvaluador',
      component: EncuestaEvaluador
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
      path: '/lista_rol',
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
    },
    {
      path: '/crear_pregunta',
      name: 'CrearPregunta',
      component: CrearPregunta
    },
    {
      path: '/lista_pregunta',
      name: 'ListarPregunta',
      component: ListarPregunta
    },
    {
      path: '/preguntas/:preguntaId/editar_pregunta',
      name: 'EditarPregunta',
      component: EditarPregunta
    },
    {
      path: '/crear_respuesta',
      name: 'CrearRespuesta',
      component: CrearRespuesta
    },
    {
      path: '/lista_respuesta',
      name: 'ListarRespuesta',
      component: ListarRespuesta
    },
    {
      path: '/respuestas/:respuestaId/editar_respuesta',
      name: 'EditarRespuesta',
      component: EditarRespuesta
    },
    {
      path: '/crear_usuario',
      name: 'CrearUsuario',
      component: CrearUsuario
    },
    {
      path: '/lista_usuario',
      name: 'ListarUsuario',
      component: ListarUsuario
    },
    {
      path: '/usuarios/:usuarioId/editar_usuario',
      name: 'EditarUsuario',
      component: EditarUsuario
    }
  ],
  mode: 'history'
  })
