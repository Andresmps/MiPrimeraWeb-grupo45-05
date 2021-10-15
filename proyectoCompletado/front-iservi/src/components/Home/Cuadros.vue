

<template>
 
  <v-item-group class="mt-6">
    


    <v-container>

    <v-snackbar
      :timeout="-1"
      :value="true"
      absolute
      color="teal lighten-2"
      left
      shaped
      top
      class=""
      
    >
      SERVICIOS OFERTADOS
    </v-snackbar>


    <v-container></v-container>
<v-container></v-container>
<v-container></v-container>

      <v-row
      class="align-content-space-around "
      >
        
 
        <!-- Servicio 1 -->
        <v-card
          class="mx-auto mb-10"
          max-width="344"
          :headers="headers"
          :items="everServicio"
          v-for="(datoServicio, index) in this.everServicio" :key="index"
        >
          <v-img
            src="./img/servicios_contratista.png"
            height="200px"
          ></v-img>
 
          <v-card-title class="justify-center">
            {{datoServicio.service_name}}
          </v-card-title>
 
          <div>
          <v-rating
          :value="datoServicio.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
          </div>

          <div class="my-4 text-subtitle-1">
            {{'$|Hora '+datoServicio.cost_per_hour}}
          </div>

          <div class="text--primary alinearjustificado mb-10">
          {{datoServicio.service_description}}
          </div>  

          
 
        </v-card>

      </v-row>
 
    </v-container>
    
   </v-item-group>
 
 
</template>

<script>
  export default {
 
    name: 'Cuadros',

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

      everServicio: [],
      editedIndex: -1,
      editedItem: [],
      defaultItem: {

      },
    }),

    // #33333333############
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
        this.editedIndex = this.everServicio.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.everServicio.splice(this.editedIndex, 1)
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
          Object.assign(this.everServicio[this.editedIndex], this.editedItem)
        } else {
          this.everServicio.push(this.editedItem)
        }
        this.close()
      },

              listarServicio(){

            this.axios.get('/get_all_services')
            .then((response)=>{
                this.everServicio=response.data;
                console.log('Datos de los cuadros '+this.everServicio)
                console.log('longitud de array de servicios'+ this.everServicio.length)
            })
            .catch((e)=>{
                console.log('error'+e)
            })
        },

        editarServicio(item){

            this.axios.put(`/update_service/${item._id}`,item)
            .then(res=>{

                const index = this.everServicio.findindex(n=>n._id===res.data._id)    
                this.everServicio[index].service_name=res.data.service_name;
                this.everServicio[index].service_description=res.data.service_description;
                this.everServicio[index].cost_per_hour=res.data.cost_per_hour;
                this.everServicio[index].rating=res.data.rating;


            }).catch(e=>{
            console.log(e.response)
            })
            
        },

        eliminarServicio(id){

            console.log(id);
            this.axios.delete(`/delete_service/${id}`)
            .then(res=>{
                const index= this.everServicio.findindex(item=>item._id===res.data._id)
                this.everServicio.splice(index,1);
                this.editedIndex=this.everServicio.indexOf(item);
                this.editItem= Object.assign({},item)

                

            }).catch(e=>{
                console.log(e.response);
            })
        },





    // ##############3


    }

 
  }
  
</script>
 
<style scope>
  .alinearjustificado {
    text-align: justify;
  }
</style>