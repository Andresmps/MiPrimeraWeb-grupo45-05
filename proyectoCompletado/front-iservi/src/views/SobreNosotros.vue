<template>
 
  <v-container
    class="mt-10"
  >
 
    <div class="mt-6 mb-3 text-center">
      <h1>Nosotros</h1>
    </div>
 
    <v-row
      align="center"
      justify="center"
    >
 
      <div class="col-md-5">
 
        <p class="text-justify">
          Plataforma Web enfocada en ofrecer y contratar servicios profesionales de diferente tipo como: niñera, cerrajero, servicio de limpieza, paseador de perros, aseo/limpieza, peluquero, plomero, electricista, etc. La palataforma maneja dos tipos de perfiles. Por un lado, estará el perfil de “proveedor de servicios” que hará referencia a las personas que van a ofrecer alguno de los servicios ya comentados anteriormente. Por otro lado, estará el perfil de “cliente”, el cual permitirá la visualización de los distintos servicios disponibles junto con las valoraciones, comentarios y detalles que tengan dichos servicios para así seleccionar el que mejor se ajuste a sus necesidades.
        </p>
 
      </div>
 
      <div class="col-md-7">
 
        <img src="../images/Logo 2.png"/>
 
      </div>
 
 
    </v-row>
 
  </v-container>
 
</template>
 
<script>
  export default {
    name: 'SobreNosotros',
 
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