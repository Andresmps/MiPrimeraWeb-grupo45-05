<template>
    <div id="nav">

        



        <router-link :to="{
            name: 'Home',
        }">Home</router-link> |

        <router-link :to="{
            name: 'About'    
        }">About</router-link> |

        <router-link 
            v-if="!isLogin"
         :to="{
            name: 'Login'    
        }">Login</router-link>

        <router-link 
            v-else
        :to="{
            name: 'Admin'    
        }">Admin</router-link> 
    </div>
</template>

<script>
export default {
    name: 'TheNavigation',
    computed : {
        isLogin(){
            return localStorage.getItem('token')
        }
    }
}
</script>

<style scoped>
        #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }

    #nav {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    #nav a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 20px;
    }

    #nav a.router-link-exact-active {
    color: #42b983;
    }
</style>