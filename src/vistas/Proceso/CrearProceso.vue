<template lang="html">
<div>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <b><h3>CREAR PROCESO</h3></b>
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
                  <label for="nombre" class="col-sm-2 col-form-label">Tipo de proceso:</label>
                  <div class="col-sm-8">
                    <select v-model="tipoproceso" class="form-control" id="tipoproceso">
                      <option v-for="tipoproceso in tipoprocesos" :value="tipoproceso.id">{{tipoproceso.nombre}}</option>
                    </select>
                  </div>
              </div>
              <br>
              <div class="row">
                <div class="col text-left">
                  <b-button type="submit" class="btn-large-space" variant="success">Crear</b-button>
                  <b-button :to="{name: 'ListarProceso'}" class="btn" variant="secondary">Volver</b-button>
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
      tipoproceso: '',
      tipoprocesos: []
    }
  },
  methods: {
    onSubmit(evt){
      evt.preventDefault()
      let form = {
        "proceso" : this.nombre,
        "tipoproceso" : this.tipoproceso
      };
      const path =  'http://localhost:8000/api/v1.0/procesos/'
      axios.post(path, form, {'headers': {'Authorization': 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.nombre = response.data.proceso
        this.tipoproceso = response.data.tipoproceso
        swal("Proceso creado exitosamente","","success")
        this.$router.push({ name: 'ListarProceso'})
      })
      .catch((error) => {
        console.log(error)
        swal("El proceso no pudo ser creado", "", "error")
      })
    },
    getTipoprocesos(){
      const path = 'http://localhost:8000/api/v1.0/tipoprocesos/'
      console.log(path)
      axios.get(path, {'headers': {'Authorization' : 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.tipoprocesos = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  created() {
    this.getTipoprocesos()
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
