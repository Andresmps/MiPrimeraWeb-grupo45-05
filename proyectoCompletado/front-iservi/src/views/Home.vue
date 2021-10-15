<template>

    <div class="home">
    <img alt="Vue logo" src="../assets/logoiServi.png">
    <HelloWorld msg="Inicio de sesion"/>

    <v-btn 
    class="ma-2"
    color="error">
      <router-link to="/usuarionuevo" class="flm">Registrar Usuario</router-link>
  </v-btn>

      <v-btn 
    class="ma-2"
    color="error">
      <router-link to="/clientenuevo" class="flm">Registrar Cliente</router-link>
  </v-btn>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    name: 'Home',
    components: {
    HelloWorld
  }

  }
</script>
