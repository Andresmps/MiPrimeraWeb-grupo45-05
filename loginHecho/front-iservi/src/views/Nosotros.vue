<template>
  <SobreNosotros/>
</template>

<script>
  import SobreNosotros from '../components/Nosotros/SobreNosotros.vue'

  export default {
    name: 'Nosotros',

    components: {
      SobreNosotros,
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
