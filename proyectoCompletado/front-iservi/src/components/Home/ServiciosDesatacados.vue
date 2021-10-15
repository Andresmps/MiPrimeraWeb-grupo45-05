<template>
 
  <v-item-group class="mt-6">
    <v-snackbar
      :timeout="-1"
      :value="true"
      absolute
      color="teal lighten-2"
      left
      shaped
      top
    >
      FUNCIONALIDAD DE LOS SERVICIOS
    </v-snackbar>
       <v-container fluid>
    
   
  </v-container>
<v-container></v-container>
<v-container></v-container>

    <v-container>
 
      <v-row>
 
        <!-- Servicio 1 -->
        <v-card
          class="mx-auto"
          max-width="344"
          
        >
          <v-img
            src="./img/servicios_usuarios.png"
            height="200px"
          ></v-img>
 
          <v-card-title class="justify-center">
            Usuarios
          </v-card-title>
 
          <v-card-subtitle class="alinearjustificado">
            La plataforma iServi ofrece una variedad de servicios domesticos a los cuales los usuarios pueden acceder. 
          </v-card-subtitle>
          
          <v-btn
          class="ml-3 mb-3"
          color="teal lighten-2"
          text-color="white"
          >
            Leer más ...
          </v-btn>
 
        </v-card>
 
        <!-- Servicio 2 -->
        <v-card
          class="mx-auto"
          max-width="344"
          
        >
          <v-img
            src="./img/servicios_valoracion.png"
            height="200px"
          ></v-img>
 
          <v-card-title class="justify-center">
            Valoración
          </v-card-title>
 
          <v-card-subtitle class="alinearjustificado">
            iServi, da la opción de calificar el servicio prestado por la pagina y por los demas usuarios, aumentando la confianza del uso de estos servicios por parte de los internautas. 
          </v-card-subtitle>
 
          <v-btn
          class="ml-3 mb-3"
          color="teal lighten-2"
          text-color="white"
          >
            Leer más ...
          </v-btn>
        </v-card>
 
        <!-- Servicio 3 -->
        <v-card
          class="mx-auto"
          max-width="344"
          
        >
          <v-img
            src="./img/servicios_contratista.png"
            height="200px"
          ></v-img>
 
          <v-card-title class="justify-center">
            Contratista
          </v-card-title>
 
          <v-card-subtitle class="alinearjustificado">
            iServi, da la opción de agregar los servicios que desea ofertar a nuestra comunidad de usuarios. 
          </v-card-subtitle>
 
          <v-btn
          class="ml-3 mb-3"
          color="teal lighten-2"
          text-color="white"
          >
            Leer más ...
          </v-btn>
 
        </v-card>
 
      </v-row>
 
    </v-container>
    
   </v-item-group>
 
 
</template>
 
<script>

  export default {
 
    name: 'Servicios',

 
  }
  
</script>
 
<style scope>
  .alinearjustificado {
    text-align: justify;
  }
</style>