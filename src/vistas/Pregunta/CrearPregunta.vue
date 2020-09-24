<template lang="html">
<div>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <b><h3>CREAR PREGUNTA</h3></b>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @submit="onSubmit" name="form" id="form">

              <div class="form-group row">
                  <label for="nombre" class="col-sm-2 col-form-label">Pregunta:</label>
                  <div class="col-sm-8">
                    <textarea id="textarea" v-model="nombre" type="text" name="nombre" class="form-control"></textarea>
                  </div>
              </div>
              <br>
              <div class="row">
                <div class="col text-left">
                  <b-button type="submit" class="btn-large-space" variant="success">Crear</b-button>
                  <b-button :to="{name: 'ListarPregunta'}" class="btn" variant="secondary">Volver</b-button>
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
        "nombre" : this.nombre,
      };
      const path =  'http://localhost:8000/api/v1.0/preguntas/'
      axios.post(path, form, {'headers': {'Authorization': 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.nombre = response.data.nombre
        swal("Pregunta creada exitosamente","","success")
        this.$router.push({ name: 'ListarPregunta'})
      })
      .catch((error) => {
        console.log(error)
        swal("La pregunta no pudo ser creada", "", "error")
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
