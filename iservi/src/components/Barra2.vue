<template>
  <div>
    <v-card class="overflow-hidden">
    <v-app-bar
      color="green"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Iservi</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Inicio</v-tab>
          <v-tab>Servicios</v-tab>
          <v-tab>Noticias</v-tab>
          <v-tab>Nosotros</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    </v-card>
  </div>
</template>