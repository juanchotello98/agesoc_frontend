<template>
  <div>
    <div id="app">
      <img src='@/assets/logo_agesoc.png'>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      idProcesoUsuario: this.$store.state.authUser[0].proceso,
    }
  },
  methods: {
      getProceso(){
        const path = 'http://localhost:8000/api/v1.0/procesos/'+this.idProcesoUsuario+'/'
        axios.get(path, {'headers':{'Authorization' : 'JWT ' + this.$store.state.jwt}}).then((response) => {
          this.$store.commit('updateProceso', response.data.nombre)
        })
      }
  },
  created() {
    this.getProceso()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#app{
  text-align: center;
  padding-left: 180px;
  padding-top: 100px;
}
</style>
