<template>
    <v-container>
        <h1>
            Login
        </h1>
        <main>
            <the-login></the-login>
        </main>
    </v-container>
    
</template>

<script>

import TheLogin from '../components/TheLogin.vue'

export default {
    components: { TheLogin },
    name: 'Login',
    beforeCreate(){
        if(localStorage.getItem('token')){
            this.$router.push(
                {
                    name : 'Admin'
                }
            )
        }
    }
}
</script>