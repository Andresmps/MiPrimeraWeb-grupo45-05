
var appEquipo = new Vue({
    el: '#app',
    data: {
        titulo : 'Sección de Equipo',
        imgCamilo : 'imagen-team-vue/imagen-camilo.jpeg',
        imgMario : 'imagen-team-vue/imagen-mario.jpeg',
        imgJuan : 'imagen-team-vue/imagen-juan.jpg',
        imgDavid : 'imagen-team-vue/imagen-david.jpeg',
        imgPedro : 'imagen-team-vue/imagen-pedro.jfif',
        infoCamilo : [
            {Cam : 'Camilo Andrés Martínez Vargas'},
            {Cam : 'Edad: 21 años'},
            {Cam : 'Profesion: Matematico'},
            {Cam : 'Pasatiempos: Ver series, leer libros, jugar futbol o basquetball'},
        ],

        infoMario : [
            {Mar : 'Mario Alexander Arenas Agudelo'},
            {Mar : 'Edad: 40 años'},
            {Mar : 'Profesion: Docente Tecnología e Informática'},
            {Mar : 'Pasatiempos: Programar, La Tecnología, el Cine y la música, Tocar Guitarra'},
        ],

        infoJuan : [
            {Jua : 'Juan Sebastian Guzmán Giraldo'},
            {Jua : 'Edad: 23 años'},
            {Jua : 'Profesion: Economista y Negociador internacional'},
            {Jua : 'Pasatiempos: Aficionado al manga, la literatura, el diseño y la animación'},
        ],

        infoDavid : [
            {Dav : 'David Santiago Pedraza Naranjo'},
            {Dav : 'Edad: 20 años'},
            {Dav : 'Profesion: Estudiante de Ingenieria Agronomica'},
            {Dav : 'Pasatiempos: Hacer deporte, Ver peliculas, programar'},
        ],

        infoPedro : [
            {Ped : 'Pedro Olano'},
            {Ped : 'Edad: ## años'},
            {Ped : 'Rol: Development Team'},
            {Ped : 'Pasatiempos: Programación y desarrollo web'},
        ],
    }
});