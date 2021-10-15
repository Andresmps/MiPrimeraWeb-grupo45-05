<template
	dark	
>
 
	<v-card
		dark
		class="pt-5 mt-10"
	>
	<v-btn @click="cerrarSesion" variant="outline-primary">Cerrar sesion</v-btn>
		
		<v-container>
 
			<div class="text-center">
 
				<p>
					Iservi © <span id="año"></span>. Todos los Derechos Reservados.				
				</p>
 
			</div>
 
		</v-container>
 
	</v-card>
 
</template>
<script>
 
	export default {
 
		name: 'Footer',
 
		methods: {
			// Imprimo el año actual 
			obtenerAño() {
				var año = new Date().getFullYear();
				document.getElementById('año').innerHTML = año;
				//console.log(año);
			},
			      cerrarSesion(){
        window.localStorage.removeItem('autenticacion');
		window.localStorage.removeItem('rol');
        this.$router.push({path: '/'});
      },
		},
 
		mounted () {
			this.obtenerAño()
		},
 
	}
 
</script>