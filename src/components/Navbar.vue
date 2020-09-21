<template>
  <nav class="navbar">
    <div class="brand">
      <router-link to="/inicio">AGESOC</router-link>
    </div>
    <ul class="nav">
      <li><b-dropdown-item v-on:click="cerrarSesion">Cerrar Sesión</b-dropdown-item></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      usuario : this.$store.state.authUser[0].nombre,
      rol : this.$store.state.authUserþ[0].rol
    }
  },
  methods: {
    cerrarSesion(){
      this.$store.commit("removeToken")
      this.$router.push({name: 'Login'})
    }
  },
}
</script>

<style lang="css" scoped>
  .navbar{
    display: flex;
    justify-content: space-between;
    background: #f0f0f0;
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

</style>
