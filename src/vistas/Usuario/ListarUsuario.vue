<template lang="html">
<div>
  <div v-if="this.rolUsuario===1">
    <div class="container">
      <div class="row">
        <div class="col text-left">
          <b><h3>NO TIENE PERMISOS PARA ACCEDER A ESTA VISTA</h3></b>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="container">
      <div class="row">
        <div class="col text-left">
          <div>
            <b><h3>LISTA DE USUARIOS</h3></b>
            <b-button id="btn" size="sm" :to="{name: 'CrearUsuario'}" variant="success" >Crear Usuario</b-button>
          </div>
          <br>
        </div>
      </div>
      <div class="row">
        <div class="col text-left">
          <div v-if="usuarios.length===0" class="col-md-10">
            <b-spinner variant="primary" label="Spinning"></b-spinner>
            <span class="primary">Cargando...</span>
          </div>
          <div v-else class="col-md-10">
            <b-table class="tabla" id="tabla" striped hover :items="usuarios" :fields="campos" :per-page="perPage" :current-page="currentPage" default>
              <template v-slot:cell(action)="data">
                <b-button size="sm" variant="primary" :to="{ name: 'EditarUsuario', params: { usuarioId : data.item.id } }">Editar</b-button>
                <b-button size="sm" variant="success" :to="{ name: 'EncuestaEvaluador', params: { idUsuario: data.item.id } }">Evaluar</b-button>
              </template>
            </b-table>
            <b-pagination align="center" v-model="currentPage" :total-rows="rows" :per-page="perPage" :aria-controls="tabla">
            </b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      rolUsuario : this.$store.state.authUser[0].rol,
      campos:[
        { key: 'id', label: 'ID' },
        { key: 'cedula', label: 'Cedula' },
        { key: 'nombre', label: 'Nombre' },
        { key: 'apellido', label: 'Apellido' },
        { key: 'actividad_colectiva', label: 'Actividad Colectiva' },
        { key: 'ips', label: 'EPS' },
        { key: 'cargo', label: 'Cargo' },
        { key: 'rol', label: 'Rol' },
        { key: 'proceso', label: 'Proceso' },
        { key: 'respondio', label: '¿Respondio Evaluación?' },
        { key: 'action', label: ''}
      ],
      usuarios: [],
      perPage: 7,
      currentPage: 1,

    }
  },
  computed: {
    rows(){
      return this.usuarios.length
    }
  },
  methods: {
    getUsuarios(){
      const path = 'http://localhost:8000/api/v1.0/usuarios/'
      console.log(path)
      axios.get(path, {'headers': {'Authorization' : 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.usuarios = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  created() {
    this.getUsuarios()
  }
}
</script>

<style lang="css" scoped>
	.container{
		margin-left: 270px;
		margin-top: 30px;
	}
  #tabla{
    width: 950px;
  }
</style>
