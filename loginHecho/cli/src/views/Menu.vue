<template>
    <div class="container">
        <h1>Bienvenido a nuestro sistema</h1>

        <b-button @click="cerrarSesion" variant="outline-primary">Cerrar sesion</b-button>
    </div>
</template>

<script>
export default {
    name: 'Menu',

    beforeCreate(){
        console.log("Se inicia el BeforeCreate");
        var autentication = window.localStorage.getItem('autenticacion');
        console.log("Autenticacion esta "+autentication)
        if(autentication !== 'ok'){
             this.$router.push({path: '/'});
         }
    },

    methods:{

        cerrarSesion(){
            window.localStorage.removeItem('autenticacion');
            this.$router.push({path: '/'});
        }
    }

}
</script>