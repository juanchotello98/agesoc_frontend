<template lang="html">
  <div>
    <div class="container">
      <div class="row">
        <div class="col text-left">
          <b>FORMATO EVALUACION DE DESEMPEÑO</b><br>
          <b>PARA LOS AFILIADOS VINCULADOS QUE DESARROLLAN SU ACTIVIDAD COLECTIVA EN LA ZONA 211</b>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <form name="form" id="form">
                <div class="form-grup row">
                  <label for=tititulo class="col-sm-10 col-form-label"><b>DATOS DEL EVALUADO</b></label>
                </div>
                <br>

                <div class="form-group row">
                  <label for="nombre" class="col-sm-1 col-form-label">Nombre:</label>
                  <div class="col-sm-3">
                    <input v-model="nombre" disabled="true" type="text" name="nombre" class="form-control">
                  </div>

                  <label for="apellido" class="col-md-2 col-form-label">Apellido:</label>
                  <div class="col-md-4">
                    <input v-model="apellido" disabled="true" type="text" name="apellido" class="form-control">
                  </div>
                </div>

                <div class="form-group row">
                  <label for="cedula" class="col-sm-1 col-form-label">Cedula:</label>
                  <div class="col-sm-3">
                    <input v-model="cedula" disabled="true" type="text" name="cedula" class="form-control" />
                  </div>
                  <label for="proceso" class="col-md-2 col-form-label">Area o Proceso:</label>
                  <div class="col-md-4">
                    <input v-model="this.nombreProcesoUsuario" disabled="true" type="text" name="proceso" class="form-control">
                  </div>
                </div>

                <div class="form-group row">
                  <label for="ips" class="col-sm-1 col-form-label">IPS:</label>
                  <div class="col-sm-3">
                    <input v-model="ips" disabled="true" type="text" name="ips" class="form-control">
                  </div>

                  <label for="actividad_colectiva" class="col-md-2 col-form-label">Actividad Colectiva:</label>
                  <div class="col-md-4">
                    <input v-model="actividad_colectiva" disabled="true" type="text" name="actividad_colectiva" class="form-control">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
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
  data() {
    return {
      idUsuario: this.$store.state.authUser[0].id,
      nombreProcesoUsuario: this.$store.state.procesoUsuario,
      nombre:'',
      apellido:'',
      cedula:'',
      proceso: '',
      ips :'',
      actividad_colectiva : ''
    }
  },
  computed: {
    //
  },
  methods: {
			getUsuario(){
				const path = 'http://localhost:8000/api/v1.0/usuarios/'+this.idUsuario+'/'
				axios.get(path,  {'headers': {'Authorization' : 'JWT ' + this.$store.state.jwt}}).then((response) => {
					this.nombre = response.data.nombre
					this.apellido = response.data.apellido
          this.cedula = response.data.cedula
          this.proceso = response.data.proceso
          this.ips = response.data.ips
          this.actividad_colectiva = response.data.actividad_colectiva
				})
				.catch((error) => {
          })
					console.log(error)
      },
  },
  created() {
    this.getUsuario()
  }
}
</script>

<style lang="css" scoped>
	.container{
		margin-left: 270px;
		margin-top: 30px;
	}
  .card{
    width: 1200px;
  }
</style>
