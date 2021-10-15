<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      

      <v-card>
        <v-card-title class="text-h5 headline teal lighten-2">
          Registro Cliente
        </v-card-title>

        <v-card-text>
          <v-form @submit.prevent="agregarServicio()">

          <!-- <v-text-field
            label="Nombre Usuario"
            v-model="atributos.username"
            prepend-icon="mdi-account-tie"
          ></v-text-field>
          <v-text-field
            label="Contraseña"
            v-model="atributos.password"
            prepend-icon="mdi-lock"
          ></v-text-field> -->

             <v-text-field
            label="Nombre del Servicio"
            v-model="atributos.service_name"
            prepend-icon="mdi-card-account-details"
          ></v-text-field>
          

           <v-text-field
            label="Descripción del servicio"
            v-model="atributos.service_description"
            prepend-icon="mdi-email"
          ></v-text-field>

           <v-text-field
            label="Valor del servicio/hora"
            v-model="atributos.cost_per_hour"
            type="number"
            prepend-icon="mdi-home-circle"
          ></v-text-field>

          <v-select
            label="Valoración"
            v-model="atributos.rating"
            :items="Valoracion"
            prepend-icon="mdi-home-circle"
          ></v-select>

          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="teal lighten-2"
            @click="dialog = false; agregarServicio()"
            type="submit"
          >
            Aceptar
          </v-btn>
          <v-btn
            color="secondary"
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        dialog: true,
        id_costumer:"",
        name:"",
        email:"",

        Atributos: [],

        atributos: {
        username:"",
        password:"",
        service_name:"",
        service_description:"",
        cost_per_hour:"",
        rating:"",

        },
        
        Valoracion: [0,1,2,3,4,5],
      }
    },


    beforeCreate(){
    console.log("Se inicia el BeforeCreate");
    var autentication = window.localStorage.getItem('autenticacion');
    var rol = window.localStorage.getItem('rol');
    console.log("Autenticacion esta "+autentication)
    if(autentication !== 'ok'){
          this.$router.push({path: '/'});
          location. reload();
          this.$router.go(0);

      }else{
        if(rol == 'Cliente'){
        // location. reload();
        this.$router.go(-1);
        alert('Función unicamente para usuarios')
        }
      }
      
    },

    methods:{
      agregarServicio(){

        console.log(this.atributos);

        this.axios
        .post("/new_service",this.atributos)
        .then((res)=>{
          this.Atributos.push(res.data);
          this.atributos.nombre="";
          alert("Registro agregado Correctamente")
        })

        .catch((e)=>{

          console.log(e.response);
        })
      },
    }
  }
</script>
