# evc2-legal-tech
Pagina web personal html

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portafolio personal de Aldrin Jean Pool Muñoz Alva">
  <title>Aldrin Muñoz Alva | Mi mundo</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>

<body>

  <!-- MENÚ DE NAVEGACIÓN -->
  <header class="cabecera" id="inicio">
    <a class="marca" href="#inicio">ALDRIN<span class="marca-punto">.</span></a>

    <button class="menu-boton" id="menuBoton"
      type="button" aria-expanded="false"
      aria-controls="navegacion">☰</button>

    <nav id="navegacion" class="navegacion">
      <a href="#inicio">Inicio</a>
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#intereses">Mi mundo</a>
      <a href="#galeria">Galería</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <main>

    <!-- PORTADA PRINCIPAL -->
    <section class="hero">
      <div class="hero-foto">
        <img src="imagenes/retrato-restaurante.png"
          alt="Retrato personal de Aldrin">
        <div class="hero-foto-marca">
          PERSONAL PORTFOLIO / 2026
        </div>
      </div>

      <div class="hero-texto">
        <p class="sobrelinea">
          <span class="punto"></span>
          BIENVENIDO A MI ESPACIO
        </p>

        <p class="hero-saludo">Hola, soy</p>

        <h1>Aldrin<br>Jean Pool<br><em>Muñoz Alva.</em></h1>

        <div class="linea"></div>

        <blockquote>
          «Ya que todos vivimos en una simulación,
          deberíamos aprovecharla al máximo».
        </blockquote>

        <p class="hero-bajada">
          Estudiante de Derecho. Una mirada personal
          a mis intereses, mi vocación y los caminos
          que quiero recorrer.
        </p>

        <a class="boton boton-oscuro" href="#sobre-mi">
          CONOCE MI HISTORIA <span>↗</span>
        </a>

        <span class="hero-indice">
          01 / 05 — DESCUBRE MÁS ↓
        </span>
      </div>
    </section>

    <!-- SOBRE MÍ -->
    <section class="seccion intro" id="sobre-mi">

      <div class="seccion-cabecera">
        <span class="numero">01 — MI HISTORIA</span>
        <span class="detalle">CONOCE UN POCO DE MÍ</span>
      </div>

      <div class="intro-grid">
        <div>
          <h2>El Derecho es<br>parte de <em>quien soy.</em></h2>

          <p class="intro-frase">
            Preparación, integridad y compromiso
            con la justicia.
          </p>

          <img class="intro-foto"
            src="imagenes/retrato-blanco-negro.png"
            alt="Retrato de Aldrin en blanco y negro"
            loading="lazy">
        </div>

        <div class="intro-contenido">
          <p class="texto-grande">
            Mi formación en Derecho ha sido una
            experiencia profundamente enriquecedora,
            marcada por el aprendizaje constante,
            la exigencia académica y la orientación
            de docentes altamente capacitados.
          </p>

          <p>
            Cada desafío y evaluación ha representado
            una oportunidad para fortalecer mi
            pensamiento crítico, mi capacidad de análisis
            y mi compromiso con la justicia.
          </p>

          <p>
            Mis principales intereses se encuentran en el
            <strong>Derecho Procesal Penal, Derecho Civil,
            Derecho Minero y Derecho Tributario</strong>,
            áreas que despiertan mi curiosidad y me motivan
            a seguir profundizando mis conocimientos.
          </p>

          <p>
            Mi mayor aspiración es convertirme en un
            profesional del Derecho reconocido por su
            preparación, integridad y capacidad para
            representar y defender los intereses de
            las personas.
          </p>

          <p>
            Creo que el Derecho no solo se estudia
            para conocer las leyes, sino para utilizarlas
            como instrumentos de protección, defensa
            y transformación social.
          </p>

          <p>
            Aspiro a construir una trayectoria basada
            en la excelencia, el pensamiento estratégico
            y la búsqueda permanente de soluciones justas.
          </p>

          <div class="cita">
            «Mi propósito no es únicamente ejercer el
            Derecho, sino dejar una huella a través
            de la justicia, la preparación y la defensa
            de quienes depositen su confianza en mí».
          </div>
        </div>
      </div>
    </section>

    <!-- MIS HOBBIES -->
    <section class="seccion mundo" id="intereses">

      <div class="seccion-cabecera">
        <span class="numero">02 — MI MUNDO</span>
        <span class="detalle">LO QUE ME MUEVE</span>
      </div>

      <h2>Más allá de <em>los libros.</em></h2>

      <p class="seccion-descripcion">
        También me definen las pequeñas cosas que
        disfruto y los lugares que quiero descubrir.
      </p>

      <div class="intereses-grid">

        <article class="interes">
          <span class="interes-num">01</span>
          <span class="interes-icono">↗</span>
          <h3>Ejercicio</h3>
          <p>Me gusta mantenerme activo y dedicar
          tiempo al entrenamiento.</p>
        </article>

        <article class="interes">
          <span class="interes-num">02</span>
          <span class="interes-icono">♫</span>
          <h3>Música</h3>
          <p>Escuchar música es parte de mis momentos
          de disfrute.</p>
        </article>

        <article class="interes">
          <span class="interes-num">03</span>
          <span class="interes-icono">✳</span>
          <h3>Lectura</h3>
          <p>Disfruto leer, aprender y descubrir
          nuevas perspectivas.</p>
        </article>

        <article class="interes">
          <span class="interes-num">04</span>
          <span class="interes-icono">✈</span>
          <h3>Viajes</h3>
          <p>Me gusta viajar, conocer paisajes
          y vivir nuevas experiencias.</p>
        </article>

      </div>
    </section>

    <!-- GALERÍA DE FOTOGRAFÍAS -->
    <section class="seccion galeria" id="galeria">

      <div class="seccion-cabecera">
        <span class="numero">03 — MOMENTOS</span>
        <span class="detalle">RECUERDOS EN IMÁGENES</span>
      </div>

      <div class="galeria-titulo">
        <h2>Mi vida en <em>imágenes.</em></h2>
        <p>Una selección de mis fotografías personales.</p>
      </div>

      <div class="filtros">
        <button class="filtro activo" type="button"
          data-filtro="todos" aria-pressed="true">TODAS</button>

        <button class="filtro" type="button"
          data-filtro="retrato" aria-pressed="false">RETRATOS</button>

        <button class="filtro" type="button"
          data-filtro="viaje" aria-pressed="false">VIAJES</button>
      </div>

      <div class="galeria-grid">

        <figure class="foto foto-alta" data-categoria="viaje">
          <img src="imagenes/viaje-montana.jpg"
            alt="Contemplando un paisaje de montañas"
            loading="lazy">
          <figcaption>01 / PAISAJES</figcaption>
        </figure>

        <figure class="foto" data-categoria="retrato">
          <img src="imagenes/retrato-formal.png"
            alt="Retrato con traje formal"
            loading="lazy">
          <figcaption>02 / ESTILO PERSONAL</figcaption>
        </figure>

        <figure class="foto" data-categoria="viaje">
          <img src="imagenes/paisaje-mar.jpg"
            alt="Playa de aguas transparentes"
            loading="lazy">
          <figcaption>03 / MAR Y MONTAÑAS</figcaption>
        </figure>

        <figure class="foto foto-ancha" data-categoria="viaje">
          <img src="imagenes/viaje-naturaleza.png"
            alt="Paisaje natural"
            loading="lazy">
          <figcaption>04 / AIRE LIBRE</figcaption>
        </figure>

        <figure class="foto" data-categoria="retrato">
          <img src="imagenes/retrato-blanco-negro.png"
            alt="Retrato en blanco y negro"
            loading="lazy">
          <figcaption>05 / RETRATO</figcaption>
        </figure>

        <figure class="foto" data-categoria="retrato">
          <img src="imagenes/retrato-restaurante.png"
            alt="Retrato personal"
            loading="lazy">
          <figcaption>06 / MOMENTOS</figcaption>
        </figure>

      </div>
    </section>

    <!-- MI META PROFESIONAL -->
    <section class="meta" id="meta">
      <div class="meta-interior">

        <span class="numero numero-claro">
          04 — HACIA DÓNDE VOY
        </span>

        <p class="meta-pequeno">MI META PROFESIONAL</p>

        <h2>
          Ser socio de un<br>
          <em>bufete reconocido.</em>
        </h2>

        <p>
          Construir una trayectoria profesional basada
          en la excelencia, la preparación y la defensa
          de los derechos de las personas.
        </p>

        <a class="boton boton-claro" href="#contacto">
          HABLEMOS <span>↗</span>
        </a>
      </div>

      <div class="meta-decoracion">A.</div>
    </section>

    <!-- CONTACTO -->
    <section class="seccion contacto" id="contacto">

      <div class="seccion-cabecera">
        <span class="numero">05 — CONTACTO</span>
        <span class="detalle">SIGAMOS EN CONTACTO</span>
      </div>

      <h2>Conectemos<span class="acento">.</span></h2>

      <p>
        Si deseas comunicarte conmigo, aquí tienes
        mis datos de contacto.
      </p>

      <div class="contacto-enlaces">

        <a href="mailto:Poolsitoalva123@gmail.com">
          <span>CORREO ELECTRÓNICO</span>
          <strong>Poolsitoalva123@gmail.com</strong>
          <span>↗</span>
        </a>

        <a href="tel:+51937125111">
          <span>TELÉFONO</span>
          <strong>937 125 111</strong>
          <span>↗</span>
        </a>

      </div>
    </section>

  </main>

  <!-- PIE DE PÁGINA -->
  <footer class="pie">
    <a class="marca" href="#inicio">
      ALDRIN<span class="marca-punto">.</span>
    </a>

    <span>
      ALDRIN JEAN POOL MUÑOZ ALVA · PORTAFOLIO PERSONAL
    </span>

    <a href="#inicio">VOLVER ARRIBA ↑</a>
  </footer>

</body>
</html>

