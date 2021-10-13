<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">

    <b-form @submit.prevent="buscarUsuario()" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Nombre de usuario"
        label-for="input-1"
        description="Ingrese el nombre de usuario"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"

          placeholder="Debe ingresar el  nombre de usuario"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group 
      id="input-group-2" 
      label="Contraseña" 
      label-for="input-2"
      description="Ingrese la contraseña">
        <b-form-input
          id="input-2"
          v-model="form.password"

          type="password"
          placeholder="Debe ingresar la contraseña"
          required
        ></b-form-input>
      </b-form-group>

      

      <b-button type="submit" variant="primary">Acceder</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data(){
    return{
        form:{
        username: '',
        password: '',
  },
  show: true,
  users: [],
    }
  },

  props: {
    msg: String
  },

  methods:{
    buscarUsuario(){
      console.log("Se ejecuta la función buscar");

      this.axios.get('get_all_customers') .then( res => {

        this.users = res.data;
        console.log(this.users);

        this.users.forEach((value, index) => {
          console.log(value.username);
          console.log(value.password);
          if(this.form.username === value.username){


            console.log("Usuario si existe");
            if(this.form.password === value.password){
                console.log("contraseña correcta");

                window.localStorage.setItem('autenticacion','ok')

                this.$router.push({path: '/servicios'});

            }
          }else{
              this.axios.get('get_all_employees') .then( res => {

            this.users = res.data;
            console.log(this.users);

            this.users.forEach((value, index) => {
              console.log(value.username);
              console.log(value.password);
              if(this.form.username === value.username){


                console.log("Usuario si existe");
                if(this.form.password === value.password){
                    console.log("contraseña correcta");

                    window.localStorage.setItem('autenticacion','ok')

                    this.$router.push({path: '/servicios'});
                }
              }
            })
          })

          }

        })
      })

          
  
    },

    beforeCreate(){
        console.log("Se inicia el BeforeCreate");
        var autentication = window.localStorage.getItem('autenticacion');
        console.log("Autenticacion esta "+autentication)
        if(autentication == 'ok'){
             this.$router.push({path: '/servicios'},{path: '/Noticias'},{path: '/Equipo'},{path: '/Nosotros'},{path: '/Registro'},{path: '/Registro'});
             
         }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>