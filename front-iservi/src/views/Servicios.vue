<template>
  <ServiciosDesatacados/>
</template>

<script>
  import ServiciosDesatacados from '../components/Home/ServiciosDesatacados.vue'

  export default {
    name: 'Servicios',

    components: {
      ServiciosDesatacados,
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