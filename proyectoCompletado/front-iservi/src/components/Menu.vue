<template>
  <v-card
    dark
  >
    <v-toolbar>
    
      <v-app-bar-nav-icon 
        @click="drawer = true"
        v-if="$vuetify.breakpoint.xsOnly"
      >
      </v-app-bar-nav-icon>
 
      <v-toolbar-title 
        :class="{'': $vuetify.breakpoint.smAndDown, 'ml-6': $vuetify.breakpoint.mdAndUp}">
        Iservi
      </v-toolbar-title>
 
      <v-spacer></v-spacer>
 
        <v-btn
          dark
          class="text-capitalize mr-2 v-btn--active"
          v-show="$vuetify.breakpoint.lgOnly"
        >
          <router-link to="/" class="flm">Home</router-link> 
        </v-btn>



        <v-btn
          dark
          class="text-capitalize mr-2 "
          v-show="$vuetify.breakpoint.lgOnly"
        >
          <router-link to="/servicios" class="flm">Servicios</router-link> 
        </v-btn>
 
        <div class="text-center mr-2" v-show="$vuetify.breakpoint.lgOnly">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark 
                v-bind="attrs"
                v-on="on"
                class="text-capitalize"
              >
                <router-link to="/Noticias" class="flm">Noticias</router-link>
              </v-btn>
              
            </template>
            
          </v-menu>
        </div>
 
        <v-btn
          dark
          class="text-capitalize mr-2"
          v-show="$vuetify.breakpoint.lgOnly"
        >
          <router-link to="/Equipo" class="flm">Equipo</router-link> 
        </v-btn>
 
        <v-btn
          dark
          class="text-capitalize mr-14"
          v-show="$vuetify.breakpoint.lgOnly"
        >
          <router-link to="/Nosotros" class="flm">Nosotros</router-link> 
        </v-btn>

               <v-btn
          dark
          class="text-capitalize mr-2"
          v-show="$vuetify.breakpoint.lgOnly"
         
        >

          <router-link to="/tablacrud" class="flm">Registro Tabla</router-link> 
        </v-btn>

        <v-btn
          dark
          class="text-capitalize mr-2"
          v-show="$vuetify.breakpoint.lgOnly"
         
        >
        <!-- Validar con v-if el rol almacenado en Local Storage  -->
          <router-link to="/añadirservicio" class="flm">Añadir Servicio</router-link> 
        </v-btn>
 
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
 




 <!-- ######################################################################### -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      width="100%"
      height="auto"
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"            
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/" class="flm">Home</router-link>
            </v-list-item-title>
          </v-list-item>
  
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/Noticias" class="flm">Noticias</router-link>
            </v-list-item-title>
          </v-list-item>
 
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/Equipo" class="flm">Equipo</router-link>
            </v-list-item-title>
          </v-list-item>
 
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/Nosotros" class="flm">Nosotros</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/Registro" class="flm">Añadir</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/tablacrud" class="flm">RegistroUsuario</router-link>
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list> 
    </v-navigation-drawer>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="300"
      max-width="100%"
      src="./images/BannerOpt.gif"
>   </v-img>

  </v-card>
  
</template>
<script>
  export default {
    name: 'Menu',
 
    data: () => ({
            
      
    }),
 
    methods: {
      menuItems() {
        return this.menu;
      },

    }
 
  }
</script>
<style scope>
 
  .bgsel:hover {
    background: #afaeae;
  }
 
  .flm:link {
    text-decoration: none;
  }
 
  .v-application a {
    color: #ffffff!important;
  } 
  
</style>