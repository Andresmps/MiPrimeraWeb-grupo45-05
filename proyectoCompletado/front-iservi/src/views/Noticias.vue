<template>
 
  <v-item-group class="mt-6">
       <v-container fluid>
    <v-snackbar
      :timeout="-1"
      :value="true"
      absolute
      color="teal lighten-2"
      left
      shaped
      top
    >
      NOTICIAS
    </v-snackbar>
   
  </v-container>
  <v-container></v-container>
  <v-container></v-container>
 
    <v-container>
 
      <v-row>
 
        <!-- Noticias 1 -->
        <v-card
          class="mx-auto"
          max-width="516"
          
        >
          <v-img
            src="../images/img_noticia1.jpg"
            height="200px"
          ></v-img>
 
          <v-card-title class="justify-center">
            La OIT aboga por proteger mejor a los trabajadores a domicilio.
          </v-card-title>
 
          <v-card-subtitle class="alinearjustificado">
            El aumento sustancial del trabajo a domicilio a raíz de la pandemia de COVID-19 ha puesto de manifiesto las deficientes condiciones de trabajo de muchos trabajadores a domicilio, alrededor de 260 millones de personas en todo el mundo antes de la crisis. 
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
          max-width="516"
          
        >
          <v-img
            src="../images/img_noticia2.jpg"
            height="200px"
          ></v-img>
 
          <v-card-title class="justify-center">
            Menos mujeres que hombres recuperarán el empleo durante el post COVID-19
          </v-card-title>
 
          <v-card-subtitle class="alinearjustificado">
            Un nuevo análisis asegura que la desproporcionada pérdida de empleos e ingresos sufrida por las mujeres durante la pandemia seguirá en el futuro. 
          </v-card-subtitle>
 
          <v-btn
          class="ml-3 mb-3"
          color="teal lighten-2"
          text-color="white"
          >
            Leer más ...
          </v-btn>
        </v-card>
        <v-container></v-container>
        <v-container></v-container>
        <v-container></v-container>
        <!-- Servicio 3 -->
        <v-card
          class="mx-auto"
          max-width="516"
          
        >
          <v-img
            src="../images/img_noticia3.jpg"
            height="200px"
          ></v-img>
 
          <v-card-title class="justify-center">
            Empleadas domésticas y niñeras sin cuarentena
          </v-card-title>
 
          <v-card-subtitle class="alinearjustificado">
            El gobierno de Colombia debe tomar nota de la triste experiencia de Brasil donde una de las primeras muertes por covid-19 fue una mujer del servicio contagiada por su empleadora. La ministra Arango ya detectó "abusos". 
          </v-card-subtitle>
 
          <v-btn
          class="ml-3 mb-3"
          color="teal lighten-2"
          text-color="white"
          >
            Leer más ...
          </v-btn>
 
        </v-card>
 
<!-- Servicio 4 -->
        <v-card
          class="mx-auto"
          max-width="514"
          
        >
          <v-img
            src="../images/img_noticia4.jpg"
            height="200px"
          ></v-img>
 
          <v-card-title class="justify-center">
            Fin del trabajo infantil y forzado en una cosecha de algodón de Uzbekistán
          </v-card-title>
 
          <v-card-subtitle class="alinearjustificado">
            Uzbekistán es el sexto productor mundial de algodón. Dos millones de personas recogen el algodón en estas cosechas. La OIT colabora con el gobierno, los trabajadores, los empresarios y la sociedad civil para poner fin al trabajo infantil y al trabajo forzoso durante la cosecha. 
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
    
  <v-container fluid>
    
  
  </v-container>

   </v-item-group>
 
</template>
 
<script>
  
  export default {
 
    name: 'Servicios',

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
 
<style scope>
  .alinearjustificado {
    text-align: justify;
  }
</style>