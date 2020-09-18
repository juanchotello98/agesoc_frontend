
<template lang="html">
  <div>
    <div id="app">
      <img src='@/assets/logo_agesoc.png'>
    </div>
    <div>
      </div>
    <div class="container">
      <div class="row">
        <div class="col text-left">
          <h4 id="title">SISTEMA DE EVALUACIÓN DE DESEMPEÑO</h4>
        </div>
      </div>
      <div class="row">
        <div class="col text-left">
          <div id="my-card" class="card">
            <div id="my-card-body" class="card-body">
              <form class="login form">
                <div class="form-group row">
                  <label id="my-label" for="cedula" class="col-sm-6 col-form-label"><b>Cedula</b></label>
                  <input type="text" v-model="cedula" name="cedula" class="form-control">
                </div>

                <div class="form-group row">
                  <label id="my-label" for="password" class="col-sm-6 col-form-label"><b>Contraseña</b></label>
                  <input type="password" name="password" class="form-control" v-model="password">
                </div>
                <div class="rows">

                  <div id="login" class="">
                    <b-button @click.prevent="authenticate" type="submit" variant="success">Iniciar Sesion</b-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  data () {
    return {
      cedula: '',
      password: ''
    }
  },
  methods: {
    authenticate () {
      const payload = {
        cedula: this.cedula,
        password: this.password
      }
      axios.post(this.$store.state.endpoints.obtainJWT, payload)
        .then((response) => {
          this.$store.commit('updateToken', response.data.token)
          // get and set auth user
          const base = {
            baseURL: this.$store.state.endpoints.baseUrl,
            headers: {
            // Set your Authorization to 'JWT', not Bearer!!!
              Authorization: 'JWT ' + this.$store.state.jwt,
              'Content-Type': 'application/json'
            },
            xhrFields: {
                withCredentials: true
            }
          }
          // Even though the authentication returned a user object that can be
          // decoded, we fetch it again. This way we aren't super dependant on
          // JWT and can plug in something else.
          const axiosInstance = axios.create(base)
          axiosInstance({
            //url: "/users/",
            url:"/usuarios/?cedula="+this.cedula+'&password='+this.password,
            method: "get",
            params: {}
          })
            .then((response) => {
              this.$store.commit("setAuthUser",
                {authUser: response.data.results, isAuthenticated: true}
              )
              this.$router.push({name: 'Inicio'})
            })
        })
        .catch((error) => {
          swal("El usuario  no existe"," ","error")
          console.log(error);
          console.debug(error);
          console.dir(error);
        })
    }
  }
}
</script>

<style lang="css" scoped>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    #my-card{
      text-align: center;
      margin-left: 80px;
      margin-right: 80px;
    }
    #my-card-body{
      text-align: center;
      margin-left: 30px;
      margin-right: 30px;
    }
    #login{
      text-align: center;
    }
    #title{
      text-align: center;
    }
    #my-label{
      text-align: left;
    }
</style>
