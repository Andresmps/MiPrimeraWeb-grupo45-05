<template>

<v-container>




  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>iServi</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.service_name"
                      label="Nombre del servicio"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.service_description"
                      label="Descripción"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.cost_per_hour"
                      label="Cobro por horas"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.rating"
                      label="Valoración"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem._id"
                      label="ID del servicio"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="editarServicio(editedItem); recargarPagina()"
              >
                Actualizar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item._id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="eliminarServicio(item._id); recargarPagina()"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>

</v-container>

</template>

<script>
  export default {
      name: "tablaCRUD",
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Nombre del Servicio',
          align: 'start',
          sortable: false,
          value: 'service_name',
        },
        { text: 'Descripción', value: 'service_description' },
        { text: 'Cobro por horas', value: 'cost_per_hour' },
        { text: 'Valoración', value: 'rating' },
        { text: 'ID servicio', value: '_id' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: [],
      defaultItem: {

      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
      this.listarServicio()
    },

    methods: {
      initialize () {
        
      },

      editItem (item) {

        this.dialog = true,
        console.log(item);

        this.axios.get(`/get_service/${item}`)
        .then(res=>{
            this.editedItem=res.data
        })

      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },

        listarServicio(){

            this.axios.get('/get_all_services')
            .then((response)=>{
                this.desserts=response.data;
                console.log('Servicios listados'+this.desserts[0].service_name);
                console.log('Item listados'+this.desserts[0].service_name)
            })
            .catch((e)=>{
                console.log('error'+e)
            })
        },

        editarServicio(item){

            this.axios.put(`/update_service/${item._id}`,item)
            .then(res=>{

                const index = this.desserts.findindex(n=>n._id===res.data._id)    
                this.desserts[index].service_name=res.data.service_name;
                this.desserts[index].service_description=res.data.service_description;
                this.desserts[index].cost_per_hour=res.data.cost_per_hour;
                this.desserts[index].rating=res.data.rating;


            }).catch(e=>{
            console.log(e.response)
            })
            
        },

        eliminarServicio(id){

            console.log(id);
            this.axios.delete(`/delete_service/${id}`)
            .then(res=>{
                const index= this.desserts.findindex(item=>item._id===res.data._id)
                this.desserts.splice(index,1);
                this.editedIndex=this.desserts.indexOf(item);
                this.editItem= Object.assign({},item)

                

            }).catch(e=>{
                console.log(e.response);
            })
        },

        recargarPagina(){
            location. reload();
            this.$router.go(0);
        }






    },
  }
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>