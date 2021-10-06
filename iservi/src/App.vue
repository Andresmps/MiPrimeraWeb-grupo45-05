<template>
  <v-app>
    
    <Barra />
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="300"
      max-width="100%"
      src="./images/BannerOpt.gif"
>   </v-img>
    
  
      <Servicios />
    
    <Footer/>  
  </v-app>
</template>

<script>
import Barra from './components/Barra.vue'
import Footer from './components/Footer.vue'
import Servicios from './components/Servicios.vue'
export default {
  name: 'App',
  components:{
    Barra, Footer, Servicios
  },
  data: () => ({
   
  }),
};
</script>

