const app = new Vue(
    {
        el: '#app',
        data: {
            nombre_plataforma: 'iSERVI',
            secciones: {
                seccion_servicios: {
                    nombre: "Servicios",
                    servicios: [
                        {
                            nombre: "Usuarios",
                            descripcion: "iServi, da la opción de calificar el servicio prestado por la pagina y por los demas usuarios, aumentando la confianza del uso de estos servicios por parte de los internautas.",
                            image: '../images/img_services/customer_service.png'
                        },
                        {
                            nombre: "Valoracion",
                            descripcion: "iServi, da la opción de calificar el servicio prestado por la pagina y por los demas usuarios, aumentando la confianza del uso de estos servicios por parte de los internautas.",
                            image: '../images/img_services/rating_service.png'
                        },
                        {
                            nombre: "Contratista",
                            descripcion: "iServi, da la opción de agregar los servicios que desea ofertar a nuestra comunidad de usuarios.",
                            image: '../images/img_services/contractor_service.png'
                        }
                    ]
                },
                seccion_noticias: {
                    nombre: "Noticias",
                    noticias: [
                        {
                            titulo: "La OIT aboga por proteger mejor a los trabajadores a domicilio",
                            descripcion: "El aumento sustancial del trabajo a domicilio a raíz de la pandemia\n\
                            de COVID-19 ha puesto de manifiesto las deficientes condiciones de trabajo de\n\
                            muchos trabajadores a domicilio, alrededor de 260 millones de personas en todo\n\
                            el mundo antes de la crisis.",
                            image: "../images/img_news/news1.jpg",
                            referencia: "https://www.ilo.org/global/about-the-ilo/newsroom/news/WCMS_765904/lang--es/index.htm",
                        },
                        {
                            titulo: "Menos mujeres que hombres recuperarán el empleo durante el post COVID-19",
                            descripcion: "Un nuevo análisis asegura que la desproporcionada pérdida de empleos e ingresos sufrida\n\
                            por las mujeres durante la pandemia seguirá en el futuro.",
                            image: "../images/img_news/news2.jpg",
                            referencia: "https://www.ilo.org/global/about-the-ilo/newsroom/news/WCMS_813643/lang--es/index.htm",
                        },
                        {
                            titulo: "Empleadas domésticas y niñeras sin cuarentena",
                            descripcion: "El gobierno de Colombia debe tomar nota de la triste experiencia de Brasil donde\n\
                            una de las primeras muertes por covid-19 fue una mujer del servicio contagiada\n\
                            por su empleadora. La ministra Arango ya detectó 'abusos'.",
                            image: "../images/img_news/news3.jpg",
                            referencia: "https://www.semana.com/nacion/articulo/empleadas-domesticas-y-nineras-sin-cuarentena\n\
                            -una-excepcion-fatal-frente-al-coronavirus/659162/",
                        },
                        {
                            titulo: "Fin del trabajo infantil y del trabajo forzoso en la cosecha de algodón de Uzbekistán",
                            descripcion: "Uzbekistán es el sexto productor mundial de algodón. Dos millones de personas recogen\n\
                            el algodón en estas cosechas. La OIT colabora con el gobierno, los trabajadores,\n\
                            los empresarios y la sociedad civil para poner fin al trabajo infantil y\n\
                            al trabajo forzoso durante la cosecha.",
                            image: "../images/img_news/news4.jpg",
                            referencia: "https://www.ilo.org/global/about-the-ilo/multimedia/video/institutional-videos/WCMS_818199/lang--es/index.htm",
                        }
                    ]
                },
                seccion_equipo: {
                    nombre: "Seccion de Equipo",
                    informacion_equipo: "https://github.com/Andresmps/MiPrimeraWeb-grupo45-05",
                    integrantes: [
                        {
                            nombre: "Camilo Andrés Martínez Vargas",
                            informacion: [
                                {item : 'Camilo Andrés Martínez Vargas'},
                                {item : 'Edad: 21 años'},
                                {item : 'Profesion: Matemático'},
                                {item : 'Pasatiempos: Ver series, leer libros, jugar futbol o basquetball'},
                            ],
                            contacto: 'https://www.linkedin.com/in/andrescmartinezv ',
                            imagen: "../images/img_team/camilo.jpeg"
                        },
                        {
                            nombre: "Mario Alexander Arenas Agudelo",
                            informacion: [
                                {item : 'Mario Alexander Arenas Agudelo'},
                                {item : 'Edad: 40 años'},
                                {item : 'Profesion: Docente Tecnología e Informática'},
                                {item : 'Pasatiempos: Programar, La Tecnología, el Cine y la música, Tocar Guitarra'},
                            ],
                            contacto: 'https://www.linkedin.com/in/andrescmartinezv ',
                            imagen: "../images/img_team/mario.jpeg"
                        },
                        {
                            nombre: "David Santiago Pedraza Naranjo",
                            informacion: [
                                {item : 'David Santiago Pedraza Naranjo'},
                                {item : 'Edad: 20 años'},
                                {item : 'Profesion: Estudiante de Ingenieria Agronomica'},
                                {item : 'Pasatiempos: Hacer deporte, Ver peliculas, programar'},
                            ],
                            contacto: 'https://www.linkedin.com/in/andrescmartinezv ',
                            imagen: "../images/img_team/david.jpeg"
                        },
                        {
                            nombre: 'Juan Sebastian Guzmán Giraldo',
                            informacion: [
                                {item : 'Juan Sebastian Guzmán Giraldo'},
                                {item : 'Edad: 23 años'},
                                {item : 'Profesion: Economista y Negociador internacional'},
                                {item : 'Pasatiempos: Aficionado al manga, la literatura, el diseño y la animación'},
                            ],
                            contacto: 'https://www.linkedin.com/in/andrescmartinezv ',
                            imagen: "../images/img_team/juan.jpg"
                        },
                        {
                            nombre: 'Pedro Olano',
                            informacion: [
                                {item : 'Pedro Olano'},
                                {item : 'Edad: ## años'},
                                {item : 'Rol: Development Team'},
                                {item : 'Pasatiempos: Programación y desarrollo web'},
                            ],
                            contacto: 'https://www.linkedin.com/in/andrescmartinezv ',
                            imagen: "../images/img_team/pedro.png"
                        },
                    ]
                }

            }
        }
    }
)