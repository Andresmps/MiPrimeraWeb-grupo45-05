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
          <v-form @submit.prevent="agregarCustomer()">
             <v-text-field
            label="ID-Cliente"
            v-model="atributos.id_customer"
            prepend-icon="mdi-card-account-details"
          ></v-text-field>
          <v-text-field
            label="Nombre"
            v-model="atributos.name"
            prepend-icon="mdi-account"
          ></v-text-field>
           <v-text-field
            label="Correo Electrónico"
            v-model="atributos.email"
            prepend-icon="mdi-email"
          ></v-text-field>
           <v-text-field
            label="Dirección"
            v-model="atributos.address"
            prepend-icon="mdi-home-circle"
          ></v-text-field>
          <v-text-field
            label="Nombre Usuario"
            v-model="atributos.username"
            prepend-icon="mdi-account-tie"
          ></v-text-field>
          <v-text-field
            label="Contraseña"
            v-model="atributos.password"
            prepend-icon="mdi-lock"
          ></v-text-field>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="teal lighten-2"
            @click="dialog = false; agregarCustomer()"
            type="submit"
            v-on:click="alertDisplay"
          >
            Enviar Registro
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
        Atributos:[],
          atributos:{
          id_customer:"",
          name:"",
          email:"",
          address:"",
          username:"",
          password:"",
        }
      }
    },
    methods:{
      agregarCustomer(){
        console.log(this.atributos);
        if(!this.atributos.id_customer){
                    
            
             this.$swal('Error!',
                        'Falta ID del Cliente!',
                        'error');     
        }

        else if(!this.atributos.name){
            this.$swal('Error!',
                        'Falta el Nombre del Cliente!',
                        'error');
        }

        else if(!this.atributos.email){
            this.$swal('Error!',
                        'Falta el Correo Electrónico del Cliente!',
                        'error');
        }

        else if(!this.atributos.address){
            this.$swal('Error!',
                        'Falta la Dirección del Cliente!',
                        'error');
        }

        else if(!this.atributos.username){
            this.$swal('Error!',
                        'Falta el Nombre de Usuario del Cliente!',
                        'error');
        }

        else if(!this.atributos.password){
            this.$swal('Error!',
                        'Falta la Contraseña del Cliente!',
                        'error');
            
        }

        else {
            this.axios
        .post("/nuevo-registro", this.atributos)
        .then((res)=>{
          this.Atributos.push(res.data);

          this.$swal('success!',
                        'Cliente Registrado Exitosamente!',
                        'success');
          
        })
        .catch((e)=>{
          console.log(e.response);
          alert("Error al guardar registro");
        })
        }
        
      }
    }
  }
</script>