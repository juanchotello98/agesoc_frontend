<template lang="html">
<div>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <b><h3>CREAR USUARIO {{setPassword}}</h3></b>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @submit="onSubmit" name="form" id="form">

              <div class="form-group row">
                  <label for="nombre" class="col-sm-2 col-form-label">Nombre:</label>
                  <div class="col-sm-8">
                    <input v-model="nombre" type="text" name="nombre" class="form-control">
                  </div>
              </div>

              <div class="form-group row">
                  <label for="apellido" class="col-sm-2 col-form-label">Apellido:</label>
                  <div class="col-sm-8">
                    <input v-model="apellido" type="text" name="apellido" class="form-control">
                  </div>
              </div>

              <div class="form-group row">
                  <label for="cedula" class="col-sm-2 col-form-label">Cedula:</label>
                  <div class="col-sm-8">
                    <input v-model="cedula" type="text" name="cedula" maxlength="10" class="form-control">
                  </div>
              </div>

              <div class="form-group row">
                  <label for="password" class="col-sm-2 col-form-label">Contraseña:(Es la cedula)</label>
                  <div class="col-sm-8">
                    <input disabled="true" v-model="password" type="text" name="password" maxlength="10" class="form-control">
                  </div>
              </div>

              <div class="form-group row">
                  <label for="actividad" class="col-sm-2 col-form-label">Actividad Colectiva:</label>
                  <div class="col-sm-8">
                    <input v-model="actividad" type="text" name="actividad" class="form-control">
                  </div>
              </div>

              <div class="form-group row">
                  <label for="eps" class="col-sm-2 col-form-label">EPS:</label>
                  <div class="col-sm-8">
                    <input v-model="eps" type="text" name="eps" class="form-control">
                  </div>
              </div>

              <div class="form-group row">
                  <label for="cargo" class="col-sm-2 col-form-label">Cargo:</label>
                  <div class="col-sm-8">
                    <select v-model="cargo" class="form-control" id="cargo">
                      <option v-for="cargo in cargos" :value="cargo.id">{{cargo.cargo}}</option>
                    </select>
                  </div>
              </div>

              <div class="form-group row">
                  <label for="proceso" class="col-sm-2 col-form-label">Proceso:</label>
                  <div class="col-sm-8">
                    <select v-model="proceso" class="form-control" id="proceso">
                      <option v-for="proceso in procesos" :value="proceso.id">{{proceso.proceso}}</option>
                    </select>
                  </div>
              </div>

              <div class="form-group row">
                  <label for="rol" class="col-sm-2 col-form-label">Rol:</label>
                  <div class="col-sm-8">
                    <select v-model="rol" class="form-control" id="rol">
                      <option v-for="rol in roles" :value="rol.id">{{rol.rol}}</option>
                    </select>
                  </div>
              </div>

              <div class="form-group row">
                  <label for="eps" class="col-sm-2 col-form-label">¿Ya respondio su evaluación?:</label>
                  <div class="col-sm-8">
                    <b-form-radio v-model="respondio" name="some-radios" value=true>SI</b-form-radio>
                    <b-form-radio v-model="respondio" name="some-radios" value=false>NO</b-form-radio>
                  </div>
              </div>


              <div class="row">
                <br>
                <div class="col text-left">
                  <b-button type="submit" class="btn-large-space" variant="success">Crear</b-button>
                  <b-button :to="{name: 'ListarUsuario'}" class="btn" variant="secondary">Volver</b-button>
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
  data() {
    return {
      nombre : '',
      apellido : '',
      cedula : '',
      password : '',
      actividad: '',
      eps : '',
      cargo : '',
      proceso : '',
      rol : '',
      respondio: '',
      cargos: [],
      procesos: [],
      roles: []
    }
  },
  computed: {
    setPassword : function(){
      this.password = this.cedula
    }
  },
  methods: {
    onSubmit(evt){
      evt.preventDefault()
      let form = {
        "nombre" : this.nombre,
        "apellido" : this.apellido,
        "cedula" : this.cedula,
        "password" : this.password,
        "actividad_colectiva" : this.actividad,
        "ips" : this.eps,
        "cargo" : this.cargo,
        "proceso" : this.proceso,
        "rol" : this.rol,
        "respondio" : this.respondio
      };
      const path =  'http://localhost:8000/api/v1.0/usuarios/'
      axios.post(path, form, {'headers': {'Authorization': 'JWT ' + this.$store.state.jwt}}).then((response) => {
        swal("Usuario creado exitosamente","","success")
        this.$router.push({ name: 'ListarUsuario'})
      })
      .catch((error) => {
        console.log(error)
        swal("El usuario no pudo ser creado", "", "error")
      })
    },
    getCargos(){
      const path = 'http://localhost:8000/api/v1.0/cargos/'
      console.log(path)
      axios.get(path, {'headers': {'Authorization' : 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.cargos = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getProcesos(){
      const path = 'http://localhost:8000/api/v1.0/procesos/'
      console.log(path)
      axios.get(path, {'headers': {'Authorization' : 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.procesos = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getRoles(){
      const path = 'http://localhost:8000/api/v1.0/roles/'
      console.log(path)
      axios.get(path, {'headers': {'Authorization' : 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.roles = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  created() {
    this.getCargos()
    this.getProcesos()
    this.getRoles()
  },
}
</script>


<style lang="css" scoped>
	.container{
		margin-left: 270px;
		margin-top: 30px;
	}
  .card{
    width: 800px;
  }
  .btn-large-space{
    margin-left: 17px;
    width: 86px;
  }
  .btn{
    width: 86px;
  }
</style>
