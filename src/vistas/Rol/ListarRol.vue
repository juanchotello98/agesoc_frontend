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
            <b><h3>LISTA DE ROLES</h3></b>
            <b-button id="btn" size="sm" :to="{name: 'CrearRol'}" variant="success" >Crear Rol</b-button>
          </div>
          <br>
        </div>
      </div>
      <div class="row">
        <div class="col text-left">
          <div v-if="roles.length===0" class="col-md-10">
            <b-spinner variant="primary" label="Spinning"></b-spinner>
            <span class="primary">Cargando...</span>
          </div>
          <div v-else class="col-md-10">
            <b-table class="tabla" small id="tabla" striped hover :items="roles" :fields="campos" :per-page="perPage" :current-page="currentPage" default>
              <template v-slot:cell(action)="data">
                <b-button size="sm" variant="primary" :to="{ name: 'EditarRol', params: { rolId: data.item.id } }">Editar</b-button>
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
        { key: 'rol', label: 'Nombre' },
        { key: 'action', label: ''}
      ],
      roles: [],
      perPage: 7,
      currentPage: 1,

    }
  },
  computed: {
    rows(){
      return this.roles.length
    }
  },
  methods: {
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
    this.getRoles()
  }
}
</script>

<style lang="css" scoped>
	.container{
		margin-left: 270px;
		margin-top: 30px;
	}
</style>
