<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      

      <v-card>
        <v-card-title class="text-h5 headline teal lighten-2">
          Registro Usuario Nuevo
        </v-card-title>

        <v-card-text>
          <v-form @submit.prevent="agregarServicio()">



          <v-text-field
            label="Nombre Usuario"
            v-model="atributos.username"
            prepend-icon="mdi-account-tie"
          ></v-text-field>
          <v-text-field
            label="Contraseña"
            v-model="atributos.password"
            type="password"
            prepend-icon="mdi-lock"
          ></v-text-field>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="teal lighten-2"
            @click="dialog = false; agregarServicio(); dirigirLogin()"
            type="submit"
          >
            Aceptar
          </v-btn>
          <v-btn
            color="secondary"
            @click="dialog = false; dirigirLogin()"
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
      name:"RegistrarUsuarioNuevo",
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
        }
      }
    },


      beforeCreate(){
      console.log("Se inicia el BeforeCreate");
      var autentication = window.localStorage.getItem('autenticacion');
      console.log("Autenticacion esta "+autentication)
      if(autentication !== 'ok'){
            this.$router.push({path: '/usuarionuevo'});
        }
      },

    methods:{
      agregarServicio(){

        console.log(this.atributos);

        this.axios
        .post("/new_employee",this.atributos)
        .then((res)=>{
          this.Atributos.push(res.data);
          this.atributos.username="";
          this.atributos.password="";

        })

        .catch((e)=>{

          console.log(e.response);
        })
      },

      dirigirLogin(){
        this.$router.push({path: '/'});
      }
    }
  }
</script>