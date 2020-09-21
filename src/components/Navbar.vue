<template>
  <div>
    <div>
      <b-navbar class="navbar">
        <div class="brand">
        </div>
        <ul class="nav">
          <li id="usuario"><em>¡Bienvenido!&nbsp;{{usuario}}</em></li>
          <li><b-dropdown-item class="cerrar_sesion" v-on:click="cerrarSesion">Cerrar Sesión</b-dropdown-item></li>
        </ul>
      </b-navbar>
    </div>
    <div>
      <div>
	      <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-close-on-route-change="true" no-header visible width="250px">
	    	  <template v-slot:default="">
            <div class="p-3">
              <figure class="image-logo">
                <img :to="{ name: 'Inicio' }" class="logo" src='@/assets/logo_agesoc.png'>
              </figure>
              <nav class="mb-3">
                <b-nav vertical>
                  <b-button class="btn"  :to="{name: 'Inicio'}" block><b-icon icon="house-fill"></b-icon>&nbsp;&nbsp;Inicio</b-button>
	              	<b-button class="btn"  :to="{name: 'EncuestaEvaluado'}" block><b-icon icon="clipboard-check"></b-icon>&nbsp;&nbsp;Responder Encuesta</b-button>
	            	</b-nav>
	          	</nav>
	        	</div>
	        </template>
	      </b-sidebar>
	  	</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usuario : this.$store.state.authUser[0].nombre,
      rol : this.$store.state.authUser[0].rol
    }
  },
  methods: {
    cerrarSesion(){
      this.$store.commit("removeToken")
      this.$store.commit("removeProceso")
      this.$router.push({name: 'Login'})
    }
  },
}
</script>

<style lang="css" scoped>
  .navbar{
    display: flex;
    justify-content: space-between;
    background:#F7F9F9;
  }
  .navbar{
    color: #555;
  }
  .navbar a:hover{
    color: #42b983;
  }
  .navbar .brand{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px;
  }
  .navbar .nav{
    list-style: none;
  }
  .navbar .nav li{
    display: inline-block;
    padding: 15px 15px;
  }
  .logo{
    width: 200px;
    height: 66px;
  }
  #usuario {
    color:#2064a8;
    padding-top: 33px;
  }
  .cerrar_sesion {
    color:#2064a8;
  }
  .mb-3{
    padding-top:16px;
  }
  .btn{
    text-align: left;
    background-color:#0473bc;
  }
</style>
