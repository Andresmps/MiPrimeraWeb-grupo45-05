const app = new Vue (
    {
        el: '#app',
        data: {
            secciones : {
                seccion_servicios : {
                    nombre : "Servicios",
                    imagenes : {
                        img1: '../images/servicios_usuarios.png',
                        img2: '../images/servicios_valoracion_2.png',
                        img3: '../images/servicios_contratista.png'
                    },
                    servicios : {
                        servicio_usuarios : {
                            nombre : "Usuarios",
                            descripcion : "iServi, da la opción de calificar el servicio prestado por la pagina y por los demas usuarios, aumentando la confianza del uso de estos servicios por parte de los internautas." 
                        },
                        servicio_valoracion : {
                            nombre : "Valoracion",
                            descripcion : "iServi, da la opción de calificar el servicio prestado por la pagina y por los demas usuarios, aumentando la confianza del uso de estos servicios por parte de los internautas." 
                        },
                        servicio_contracciones : {
                            nombre : "Contratista",
                            descripcion : "iServi, da la opción de agregar los servicios que desea ofertar a nuestra comunidad de usuarios." 
                        }
                    }
                },
                seccion_noticias : {
                    
                }

            }
        }
    }
)