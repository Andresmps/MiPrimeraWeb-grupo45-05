<template>
<v-container>
  <div>

    <ServiciosDesatacados/>
  <v-container fluid>
    
   
  </v-container>
<v-container></v-container>
<v-container></v-container>

    

    <Cuadros></Cuadros>

    <!-- <tablaCRUD/> -->
  </div>
  
</v-container>
  
</template>

<script>
  import ServiciosDesatacados from '../components/Home/ServiciosDesatacados.vue'
  import tablaCRUD from '../components/tablaCRUD.vue'
  import Cuadros from '../components/Home/Cuadros.vue'
  export default {
    name: 'Servicios',

    components: {
      ServiciosDesatacados,
      tablaCRUD,
      Cuadros,
    },

    data: () => ({
      // tareasServicio: [],
    }),

    beforeCreate(){
    console.log("Se inicia el BeforeCreate");
    var autentication = window.localStorage.getItem('autenticacion');
    console.log("Autenticacion esta "+autentication)
    if(autentication !== 'ok'){
            this.$router.push({path: '/'});
        }
    },
  }
</script>