<template>
<v-container>
  <div>
    <ServiciosDesatacados/>

    <tablaCRUD/>
  </div>
  
</v-container>
  
</template>

<script>
  import ServiciosDesatacados from '../components/Home/ServiciosDesatacados.vue'
  import tablaCRUD from '../components/tablaCRUD.vue'

  export default {
    name: 'Servicios',

    components: {
      ServiciosDesatacados,
      tablaCRUD
    },

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