<template lang="html">
<div>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <b><h3>CREAR ROL</h3></b>
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
                  <b-button type="submit" class="btn-large-space" variant="success">Crear</b-button>
                  <b-button :to="{name: 'ListarRol'}" class="btn" variant="secondary">Volver</b-button>
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
      nombre : ''
    }
  },
  methods: {
    onSubmit(evt){
      evt.preventDefault()
      let form = {
        "rol" : this.nombre,
      };
      const path =  'http://localhost:8000/api/v1.0/roles/'
      axios.post(path, form, {'headers': {'Authorization': 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.nombre = response.data.rol
        swal("Rol creado exitosamente","","success")
        this.$router.push({ name: 'ListarRol'})
      })
      .catch((error) => {
        console.log(error)
        swal("El rol no pudo ser creado", "", "error")
      })
    }
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
