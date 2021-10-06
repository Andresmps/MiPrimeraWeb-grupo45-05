<template>
    <div id="app">

    <!-- Menu -->

    <header class="header_class">
      <div id="navegacion" class="contenedor-menu">
        <div class="titulo-pagina">
          <h1> iServi</h1>
        </div>

        <div class="contenedor-logo">
          <img class="contenedor-logo__site-logo" src='../assets/images/img_logo/LogoInvertido.png' height="70 px">
        </div>

        <nav class="navegacion-global">

          <ul class="lista-navegacion">
            <a class="boton__navegacion" href="#navegacion">Inicio</a>
            <a class="boton__navegacion" href="#services">Servicios</a>
            <a class="boton__navegacion" href="#news">Noticias</a>
            <a class="boton__navegacion" href="#team">Nosotros</a>
            <!-- <a class ="boton__navegacion" href="#">Contáctenos</a> -->
          </ul>
        </nav>
      </div>
      <div class="banner">
        <img src= "../assets/images/img_logo/BannerOpt.gif" alt="Banner de presentación">
      </div>


    </header>


    <!-- servicios -->

    <section class="seccion_servicios" id="services" style="background-color: #82b6a4;">

      <header class="p-4">
        <div class="titulo_servicios_recuadro container row">
          <div class="item_titulo_servicios p-1 col-1 bg-success bg-gradient" style="width: 10px;">
            <div> </div>
          </div>
          <h2 class="titulo_servicios align-self-center p-2 col-11">
            {{secciones.seccion_servicios.nombre}}
          </h2>
        </div>
      </header>

      <div class="contenedor_servicios row justify-content-around ">

        <article class="servicio col-3 bg-light p-4 rounded border-danger" v-for="(servicios, index) in secciones.seccion_servicios" :key="index">
          <img class="servicio_imagen img-fluid rounded-circle" :src="servicios.image" alt="Imagen servicio usuarios"
            width="350px" height="350px">

          <p class="text-center text-uppercase fw-bold text-danger">
            {{servicios.nombre}}</p>
          <p>{{servicios.descripcion}}</p>

        </article>

      </div>>
      <!-- development version, includes helpful console warnings -->

    </section>


    <!-- noticias -->
    <section class="seccion_noticias " id="news">
      <header class="p-5">
        <div class="titulo_noticias_recuadro row">
          <div class="item_titulo_servicios p-1 col-1 bg-success bg-gradient" style="width: 10px;">
            <div> </div>
          </div>
          <h2 class="titulo_noticias align-self-center p-2 col-11"> {{secciones.seccion_noticias.nombre}} </h2>
        </div>
      </header>

      <div class="contenedor_noticias row">

        <article class="noticia col-5 p-2 rounded" v-for="(noticia, index) in secciones.seccion_noticias" :key="index">
          <h4 class="titulo_noticia fw-bold"> {{noticia.titulo}} </h4>
          <a :href="noticia.referencia">
            <img class="noticia_imagen img-fluid" :src='noticia.image' alt="Imagen noticia indice" width="350px"
              height="350px">
          </a>
          <p class="resumen_noticia fw">
            {{noticia.descripcion}}}
          </p>
        </article>

      </div>

    </section>


    <!-- Seccion team -->

    <section id="team" class="alert-success" style="background-color: #82b6a4;">
      <!-- bloque     -->


      <header class="p-5">
        <div class="titulo_servicios_recuadro container row">
          <div class="item_equipo p-1 col-1 bg-success bg-gradient" style="width: 10px;">
            <div> </div>
          </div>
          <h2 class="titulo_equipo align-self-center p-2 col-11">
            {{secciones.seccion_equipo.nombre}}
          </h2>
        </div>
      </header>

      <div class="integrantes row justify-content-around  p-2">
        <!-- container -->

        <article class="integrante-i col-2 bg-warning p-3" v-for="(integrante, index) in secciones.seccion_equipo" :key="index">
          <!-- bloque -->
          <img class="integrante-i__imagen img-thumbnail p-3" v-bind:src='integrante.imagen'> <!-- etiqueta -->

          <ol>
            <li v-for="(info, index) in integrante.informacion" :key="index">
              <!-- index como posicion o identificador -->
              {{ info.item }}
            </li>
          </ol>
          <!-- <a href="secciones.seccion_equipo-informacion_equipo" target="_blank">Información del
            Desarrollador</a> -->
        </article>




        

      </div>
    </section>

    <!-- Footer section-->

    <!-- <div class="linea_footer"></div> -->
    <footer class="bg-success text-white pt-3 pb-2">
      <div class="container text-justify text-md-left">

        <div class="row text-justify text-md-left">

          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">{{nombre_plataforma}}</h5>
            <p>
              Plataforma Web enfocada en ofrecer y contratar servicios profesionales
              de diferente tipo como: niñera, cerrajero, servicio de limpieza, paseador
              de perros, aseo/limpieza, peluquero, plomero, electricista, etc.
              La palataforma maneja dos tipos de perfiles. Por un lado, estará el perfil
              de “proveedor de servicios” que hará referencia a las personas que van a ofrecer
              alguno de los servicios ya comentados anteriormente. Por otro lado, estará el perfil
              de “cliente”, el cual permitirá la visualización de los distintos servicios
              disponibles junto con las valoraciones, comentarios y detalles que tengan dichos
              servicios para así seleccionar el que mejor se ajuste a sus necesidades.
            </p>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Integrantes Equipo</h5>
            <p>Juan Sebástian Guzman
              <br>Rol: Development Team - Scrum Master
              <br>Contacto: juanguzgira@outlook.com
            </p>
            <p>Pedro Olano
              <br>Rol: Product Owner - Development Team
              <br>Contacto: pedroolano12@gmail.com
            </p>
            <p>Camilo Martínez
              <br>Rol: Development Team - Backend
              <br>Contacto: andresmartinezen@gmail.com
            </p>
            <p>David Pedraza
              <br>Rol: Development Team - Product Owner
              <br>Contacto: pedrazanaranjosantiago@gmail.com
            </p>
            <p>Mario Arenas Agudelo
              <br>Rol: Development Team - Backend - Frontend
              <br>Contacto: mario.alexa.arenas@gmail.com
            </p>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Contacto</h5>
            <p>
              <i class="fas fa-home mr-3"></i> Calle 25 #12-11. Pereira Risaralda
            </p>
            <p>
              <i class="fas fa-envelope mr-3"></i> iservi@gmail.com
            </p>
            <p>
              <i class="fas fa-phone mr-3"></i>+57 3013013011
            </p>
          </div>
        </div>
        <hr class="mb-4">
        <div class="row align-items-center">
          <div class="col-md-7 col-lg-8 d-flex align-items-center">
            <img src='../assets/images/img_logo/Logo 2.png' alt="Logo" class="mr-2" style="width:20%">
            <p> copyright &copy;2021 Todos los Derechos reservador por:
              <a href="#" style="text-decoration: none;" class="text-warning"><strong>Iservi</strong></a>
            </p>
          </div>
          <div class="col-md-5 col-lg-4">
            <div class="text-center text-md-right">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <a href="#" class="btn-floating btn-sm text-white" style="font-size:23px;"><i
                      class="fab fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="btn-floating btn-sm text-white" style="font-size:23px;"><i
                      class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="btn-floating btn-sm text-white" style="font-size:23px;"><i
                      class="fab fa-google-plus"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="btn-floating btn-sm text-white" style="font-size:23px;"><i
                      class="fab fa-youtube"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://github.com/Andresmps/MiPrimeraWeb-grupo45-05" class="btn-floating btn-sm text-white"
                    style="font-size:23px;"><i class="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </footer>
      <!-- <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://kit.fontawesome.com/c15b744a04.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="../js/main.js"></script> -->
  </div>
</template>

<script>
export default {
    name: "iServi",


    data() {
        return{
        nombre_plataforma: 'iSERVI',
        secciones: {
            seccion_servicios: {
                nombre: "Servicios",
                servicios: [
                    {
                        nombre: "Usuarios",
                        descripcion: "iServi, da la opción de calificar el servicio prestado por la pagina y por los demas usuarios, aumentando la confianza del uso de estos servicios por parte de los internautas.",
                        image: '../assets/images/img_services/customer_service.png'
                    },
                    {
                        nombre: "Valoracion",
                        descripcion: "iServi, da la opción de calificar el servicio prestado por la pagina y por los demas usuarios, aumentando la confianza del uso de estos servicios por parte de los internautas.",
                        image: '../assets/images/img_services/rating_service.png'
                    },
                    {
                        nombre: "Contratista",
                        descripcion: "iServi, da la opción de agregar los servicios que desea ofertar a nuestra comunidad de usuarios.",
                        image: '../assets/images/img_services/contractor_service.png'
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
                        image: "../assets/images/img_news/news1.jpg",
                        referencia: "https://www.ilo.org/global/about-the-ilo/newsroom/news/WCMS_765904/lang--es/index.htm",
                    },
                    {
                        titulo: "Menos mujeres que hombres recuperarán el empleo durante el post COVID-19",
                        descripcion: "Un nuevo análisis asegura que la desproporcionada pérdida de empleos e ingresos sufrida\n\
                        por las mujeres durante la pandemia seguirá en el futuro.",
                        image: "../assets/images/img_news/news2.jpg",
                        referencia: "https://www.ilo.org/global/about-the-ilo/newsroom/news/WCMS_813643/lang--es/index.htm",
                    },
                    {
                        titulo: "Empleadas domésticas y niñeras sin cuarentena",
                        descripcion: "El gobierno de Colombia debe tomar nota de la triste experiencia de Brasil donde\n\
                        una de las primeras muertes por covid-19 fue una mujer del servicio contagiada\n\
                        por su empleadora. La ministra Arango ya detectó 'abusos'.",
                        image: "../assets/images/img_news/news3.jpg",
                        referencia: "https://www.semana.com/nacion/articulo/empleadas-domesticas-y-nineras-sin-cuarentena\n\
                        -una-excepcion-fatal-frente-al-coronavirus/659162/",
                    },
                    {
                        titulo: "Fin del trabajo infantil y del trabajo forzoso en la cosecha de algodón de Uzbekistán",
                        descripcion: "Uzbekistán es el sexto productor mundial de algodón. Dos millones de personas recogen\n\
                        el algodón en estas cosechas. La OIT colabora con el gobierno, los trabajadores,\n\
                        los empresarios y la sociedad civil para poner fin al trabajo infantil y\n\
                        al trabajo forzoso durante la cosecha.",
                        image: "../assets/images/img_news/news4.jpg",
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
                        imagen: "../assets/images/img_team/camilo.jpeg"
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
                        imagen: "../assets/images/img_team/mario.jpeg"
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
                        imagen: "../assets/images/img_team/david.jpeg"
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
                        imagen: "../assets/images/img_team/juan.jpg"
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
                        imagen: "../assets/images/img_team/pedro.png"
                    },
                ]
            }

        }
        }
    },
}
</script>