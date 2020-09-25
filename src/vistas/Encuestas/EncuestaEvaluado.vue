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
                  <label for="proceso" class="col-md-2 col-form-label">Área o Proceso:</label>
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
        <div class="col text-left">
          <div class="card">
            <div class="card-body">
              <form @submit="onSubmit" name="encuesta" id="encuesta">
                <table id="mitable" class="mt-2 table table-bordered table-striped table-responsive">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Pregunta</th>
                      <th>Respuesta</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="pregunta in preguntas" :key="pregunta.id">
                      <td>
                        {{pregunta.id}}
                      </td>
                      <td>
                        {{pregunta.nombre}}
                      </td>
                      <td>
                      <select id="respuesta" v-model="pregunta.respuesta" @change="setSeleccionvdos(pregunta)">
                        <option v-for="respuesta in respuestas" :key="respuesta.id">{{respuesta.seleccion}}</option>
                      </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br>
               <div class="row">
                <div class="col text-left">
                  <b-button :disabled="isDisabled" type="submit" class="btn-large-space" variant="success">Enviar</b-button>
                  <b-button :to="{name: 'Inicio'}" class="btn" variant="secondary">Volver</b-button>
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
export default {
  data() {
    return {
      campos:[
        { key: 'id', label: 'ID'},
        { key: 'nombre', label: 'Item' },
        { key: 'action', label : 'Respuesta'}
      ],
      perPage: 41,
      currentPage: 1,

      idUsuario: this.$store.state.authUser[0].id,
      rolUsuario: this.$store.state.authUser[0].rol,
      procesoUsuario: this.$store.state.authUser[0].proceso,

      nombreProcesoUsuario: this.$store.state.procesoUsuario,
      nombre:'',
      apellido:'',
      cedula:'',
      proceso: '',
      ips :'',
      actividad_colectiva : '',
      preguntas:[],
      respuestas:[],
      listaRespuestaEncuesta:[],
      respuestaEncuesta : {
          pregunta:'',
          respuesta:'',
          evaluado:'',
          rol:'',
          proceso:''
        }
    }
  },
  computed: {
    isDisabled(){
      if  (this.listaRespuestaEncuesta.length===this.preguntas.length){
        return false
      }
      else{
        return true
      }
    }
  },
  methods: {
    onSubmit(evt){
      evt.preventDefault()
      let lista = this.listaRespuestaEncuesta
      const path =  'http://localhost:8000/api/v1.0/respuestaencuestas/'
      axios.post(path, lista, {'headers': {'Authorization': 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.nombre = response.data.nombre
        swal("Encuesta guardada exitosamente","","success")
      })
      .catch((error) => {
        console.log(error)
        swal("La encuesta no pudo ser guardada", "", "error")
      })
    },
    respuesta(items){
      console.log(items)
    },
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
        console.log(error)
      })
    },
    getPreguntas(){
      const path = 'http://localhost:8000/api/v1.0/preguntas/'
      axios.get(path, {'headers': {'Authorization' : 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.preguntas = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getRespuestas(){
      const path = 'http://localhost:8000/api/v1.0/respuestas/'
      axios.get(path, {'headers': {'Authorization' : 'JWT ' + this.$store.state.jwt}}).then((response) => {
        this.respuestas = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
    },
    setSeleccionvuno(pregunta){
      this.respuestaEncuesta.pregunta = pregunta.id
      this.respuestaEncuesta.respuesta = pregunta.respuesta
      this.respuestaEncuesta.evaluado = this.idUsuario
      this.respuestaEncuesta.rol = this.rolUsuario
      this.respuestaEncuesta.proceso = this.procesoUsuario
      this.listaRespuestaEncuesta.push(this.respuestaEncuesta)
      console.log(pregunta)
      console.log(this.listaRespuestaEncuesta)
      this.respuestaEncuesta = { }
    },
    setSeleccionvdos(pregunta){
      let repetido = null
      let index = 0

      if (this.listaRespuestaEncuesta.length != 0){
        this.listaRespuestaEncuesta.forEach(element => {
          if(element.pregunta == pregunta.id){
            repetido = true
            index = this.listaRespuestaEncuesta.indexOf(element)
            console.log("Index:" +index)
          }
        });
        if(repetido==true){
          console.log("modifica obj repetido")
            this.listaRespuestaEncuesta[index].respuesta = pregunta.respuesta
            console.log(this.listaRespuestaEncuesta)
            this.respuestaEncuesta = { }
          }else{
            console.log("crear obj si no esta repetido")
            this.respuestaEncuesta.pregunta = pregunta.id
            this.respuestaEncuesta.respuesta = pregunta.respuesta
            this.respuestaEncuesta.evaluado = this.idUsuario
            this.respuestaEncuesta.rol = this.rolUsuario
            this.respuestaEncuesta.proceso = this.procesoUsuario
            this.listaRespuestaEncuesta.push(this.respuestaEncuesta)
            console.log(this.listaRespuestaEncuesta)
            this.respuestaEncuesta = { }
          }
      }else{
        console.log("crear primer obj")
        this.respuestaEncuesta.pregunta = pregunta.id
        this.respuestaEncuesta.respuesta = pregunta.respuesta
        this.respuestaEncuesta.evaluado = this.idUsuario
        this.respuestaEncuesta.rol = this.rolUsuario
        this.respuestaEncuesta.proceso = this.procesoUsuario
        this.listaRespuestaEncuesta.push(this.respuestaEncuesta)
        console.log(this.listaRespuestaEncuesta)
        this.respuestaEncuesta = { }
      }



    }
  },
  created() {
    this.getUsuario()
    this.getPreguntas()
    this.getRespuestas()
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
  #mitable{
    width: 960px;
  }
  #respuesta{
    width: 70px;
    text-align: center;
  }
</style>
