<template lang="html">
<div>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <b><h3>EDITAR CARGO</h3></b>
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
                  <b-button :to="{name: 'ListarCargo'}" class="btn" variant="secondary">Volver</b-button>
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
      cargoId: this.$route.params.cargoId
    }
  },
  methods: {
    onSubmit(evt){
      let form = {
        "cargo" : this.nombre,
      };
      evt.preventDefault()
      const path =  'http://localhost:8000/api/v1.0/cargos/'+this.cargoId+'/'
      axios.put(path,form, {'headers': {'Authorization': 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.nombre = response.data.cargo
        swal("Cargo editado exitosamente","","success")
        this.$router.push({ name: 'ListarCargo'})
      })
      .catch((error) => {
        console.log(error)
        swal("El cargo no pudo ser creado", "", "error")
      })
    },

    getCargo(){
      const path =  'http://localhost:8000/api/v1.0/cargos/'+this.cargoId+'/'
      axios.get(path, {'headers': {'Authorization': 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.nombre = response.data.cargo
      })
      .catch((error) => {
        console.log(error)
      })
    }

  },
  created() {
    this.getCargo()
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
