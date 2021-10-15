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
      EQUIPO DE TRABAJO
    </v-snackbar>
   
  </v-container>
  <v-container></v-container>
  <v-container></v-container>
    <v-row align="center" justify="center">
        <v-col width="150" align="center">
        <v-card width="450" color="warning">
        <v-img
          height="400px"
          src="../images/imagen-camilo.jpeg"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            

            <v-toolbar-title class="text-h6 white--text pl-0">
              Integrante
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="white"
              icon
            >
              
            </v-btn>
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              >
            </v-avatar>
            <p class="ml-3">
              Camilo Andrés Martínez Vargas
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Perfil
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal" t>
                  <strong>{{ message.from }}</strong> {{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
        </v-col>
        <v-col align="center">
        <v-card width="450" color="warning">
        <v-img
          height="400px"
          src="../images/imagen-david.jpeg"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            

            <v-toolbar-title class="text-h6 white--text pl-0">
              Integrante
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="white"
              icon
            >
              
            </v-btn>
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              >
            </v-avatar>
            <p class="ml-3">
              David Santiago Pedraza Naranjo
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Perfil
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message2 in messages2"
              :key="message2.time"
              :color="message2.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message2.from }}</strong> {{ message2.time }}
                </div>
                <div>{{ message2.message2 }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
        </v-col>

        <v-col align="center">
        <v-card width="450" color="warning">
        <v-img
          height="400px"
          src="../images/imagen-mario.jpeg"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            

            <v-toolbar-title class="text-h6 white--text pl-0">
              Integrante
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="white"
              icon
            >
              
            </v-btn>
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              >
            </v-avatar>
            <p class="ml-3">
              Mario Alexander Arenas Agudelo
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Perfil
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message3 in messages3"
              :key="message3.time"
              :color="message3.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message3.from }}</strong> {{ message3.time }}
                </div>
                <div>{{ message3.message3 }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
        </v-col>

    </v-row>
  <v-container fluid>
    
  
  </v-container>

   </v-item-group>
 
</template>
 
<script>
  export default {
    data: () => ({
      messages: [
        {
          from: 'Edad:',
          message: '21 años',
          time: '',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'Profesion:',
          message: 'Matematico',
          time: '',
          color: 'green',
        },
        {
          from: 'Pasatiempos:',
          message: 'Ver series, leer libros, jugar futbol o basquetball',
          time: '',
          color: 'deep-purple lighten-1',
        },
      ],
      messages2: [
        {
          from: 'Edad:',
          message2: '20 años',
          time: '',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'Profesion:',
          message2: 'Estudiante de Ingenieria Agronomica',
          time: '',
          color: 'green',
        },
        {
          from: 'Pasatiempos:',
          message2: 'Hacer deporte, Ver peliculas, programar',
          time: '',
          color: 'deep-purple lighten-1',
        },
      ],
      messages3: [
        {
          from: 'Edad:',
          message3: '40 años',
          time: '',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'Profesion:',
          message3: 'Docente de Tecnología e Informática',
          time: '',
          color: 'green',
        },
        {
          from: 'Pasatiempos:',
          message3: 'Programar, La Tecnología, el Cine y la música, Tocar Guitarra',
          time: '',
          color: 'deep-purple lighten-1',
        },
      ],
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
 
<style scope>
  .alinearjustificado {
    text-align: justify;
  }
</style>