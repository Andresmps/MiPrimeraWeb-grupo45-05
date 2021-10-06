<template
	dark	
>
 
	<v-card
		dark
		class="pt-5 mt-10"
	>
		
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
				
			}
		},
 
		mounted () {
			this.obtenerAño()
		},
 
	}
 
</script>