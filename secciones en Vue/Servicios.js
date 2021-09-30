const app = new Vue ({
    el: '#app',
    data: {
        seccion : 'Servicios',
        img1 : 'images/servicios_usuarios.png',
        img2 : 'images/servicios_valoracion_2.png',
        img3 : 'images/servicios_contratista.png',
        infoServicio1 : [
            {descripcion : 'La plataforma iServi ofrece una variedad de servicios domesticos a los cuales los usuarios pueden acceder.'}
        ],
        servicio1 : 'Usuarios',
        infoServicio2 : [
            {descripcion : 'iServi, da la opción de calificar el servicio prestado por la pagina y por los demas usuarios, aumentando la confianza del uso de estos servicios por parte de los internautas.'}
        ],
        servicio2 : 'Valoración',
        infoServicio3 : [
            {descripcion : 'iServi, da la opción de agregar los servicios que desea ofertar a nuestra comunidad de usuarios.'}
        ],
        servicio3 : 'Contratista',
    }
})