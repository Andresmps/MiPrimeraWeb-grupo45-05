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
          <form>
             <v-text-field
            label="ID-Cliente"
            v-model="id_costumer"
            prepend-icon="mdi-card-account-details"
          ></v-text-field>
          <v-text-field
            label="Nombre"
            v-model="name"
            prepend-icon="mdi-account"
          ></v-text-field>
           <v-text-field
            label="Correo Electrónico"
            v-model="email"
            prepend-icon="mdi-email"
          ></v-text-field>
           <v-text-field
            label="Dirección"
            v-model="address"
            prepend-icon="mdi-home-circle"
          ></v-text-field>
          <v-text-field
            label="Nombre Usuario"
            v-model="username"
            prepend-icon="mdi-account-tie"
          ></v-text-field>
          <v-text-field
            label="Contraseña"
            v-model="password"
            prepend-icon="mdi-lock"
          ></v-text-field>
          </form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="teal lighten-2"
            @click="dialog = false"
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
      }
    },


    beforeCreate(){
    console.log("Se inicia el BeforeCreate");
    var autentication = window.localStorage.getItem('autenticacion');
    console.log("Autenticacion esta "+autentication)
    if(autentication !== 'ok'){
          this.$router.push({path: '/'});
          location. reload();
          this.$router.go(0);

      }
    },
  }
</script>
// v-model="dialog"