<template lang="html">
<div>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <b><h3>EDITAR TIPO DE PROCESO</h3></b>
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
              <br>
              <div class="row">
                <div class="col text-left">
                  <b-button type="submit" class="btn-large-space" variant="success">Editar</b-button>
                  <b-button :to="{name: 'ListarTipoproceso'}" class="btn" variant="secondary">Volver</b-button>
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
      tipoprocesoId: this.$route.params.tipoprocesoId
    }
  },
  methods: {
    onSubmit(evt){
      let form = {
        "nombre" : this.nombre,
      };
      evt.preventDefault()
      const path =  'http://localhost:8000/api/v1.0/tipoprocesos/'+this.tipoprocesoId+'/'
      axios.put(path,form, {'headers': {'Authorization': 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.nombre = response.data.nombre
        swal("Tipo de proceso editado exitosamente","","success")
        this.$router.push({ name: 'ListarTipoproceso'})
      })
      .catch((error) => {
        console.log(error)
        swal("El tipo de proceso no pudo ser creado", "", "error")
      })
    },

    getTipoproceso(){
      const path =  'http://localhost:8000/api/v1.0/tipoprocesos/'+this.tipoprocesoId+'/'
      axios.get(path, {'headers': {'Authorization': 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.nombre = response.data.nombre
      })
      .catch((error) => {
        console.log(error)
      })
    }

  },
  created() {
    this.getTipoproceso()
  }
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
