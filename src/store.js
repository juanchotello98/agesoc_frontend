import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const store = new Vuex.Store({
  state: {
    procesoUsuario: localStorage.getItem('nombre'),
    authUser: {},
    isAuthenticated: false,
    jwt: localStorage.getItem('token'),
    endpoints: {
      // TODO: Remove hardcoding of dev endpoints
      obtainJWT: 'http://localhost:8000/api/v1.0/auth/obtain_token/',
      baseUrl: 'http://localhost:8000/api/v1.0/'
    }
  },

  mutations: {
    setAuthUser(state, {
      authUser,
      isAuthenticated
    }) {
      Vue.set(state, 'authUser', authUser)
      Vue.set(state, 'isAuthenticated', isAuthenticated)
    },
    updateToken(state, newToken) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.setItem('token', newToken);
      state.jwt = newToken;
    },
    removeToken(state) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.removeItem('token');
      state.jwt = null;
    },
    updateProceso(state, newProceso) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.setItem('nombre', newProceso);
      state.procesoUsuario = newProceso;
    },
    removeProceso(state) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.removeItem('nombre');
      state.procesoUsuario = null;
    },
  }
});
