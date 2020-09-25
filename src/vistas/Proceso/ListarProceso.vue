<template lang="html">
<div>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <div>
          <b><h3>LISTA DE PROCESOS</h3></b>
          <b-button id="btn" size="sm" :to="{name: 'CrearProceso'}" variant="success" >Crear Proceso</b-button>
        </div>
        <br>
      </div>
    </div>
    <div class="row">
      <div class="col text-left">
        <div v-if="procesos.length===0" class="col-md-10">
          <b-spinner variant="primary" label="Spinning"></b-spinner>
          <span class="primary">Cargando...</span>
        </div>
        <div v-else class="col-md-10">
          <b-table class="tabla" small id="tabla" striped hover :items="procesos" :fields="campos" :per-page="perPage" :current-page="currentPage" default>
            <template v-slot:cell(action)="data">
              <b-button size="sm" variant="primary" :to="{ name: 'EditarProceso', params: { procesoId: data.item.id } }">Editar</b-button>
            </template>
          </b-table>
          <b-pagination align="center" v-model="currentPage" :total-rows="rows" :per-page="perPage" :aria-controls="tabla">
          </b-pagination>
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
      campos:[
        { key: 'id', label: 'ID' },
        { key: 'proceso', label: 'Nombre' },
        { key: 'tipoproceso', label: 'Tipo de proceso' },
        { key: 'action', label: ''}
      ],
      procesos: [],
      perPage: 7,
      currentPage: 1,

    }
  },
  computed: {
    rows(){
      return this.procesos.length
    }
  },
  methods: {
    getProcesos(){
      const path = 'http://localhost:8000/api/v1.0/procesos/'
      console.log(path)
      axios.get(path, {'headers': {'Authorization' : 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.procesos = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  created() {
    this.getProcesos()
  }
}
</script>

<style lang="css" scoped>
	.container{
		margin-left: 270px;
		margin-top: 30px;
	}
</style>
