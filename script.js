// JAVASCRIPT BÁSICO: VARIABLES, FUNCIONES, CONDICIONALES, BUCLES Y EVENTOS.

// 1. Guardamos los elementos HTML en variables.
const menuBoton = document.getElementById("menuBoton");
const navegacion = document.getElementById("navegacion");

// 2. Evento: al hacer clic, abrimos o cerramos el menú móvil.
menuBoton.addEventListener("click", function () {
  const abierto = navegacion.classList.toggle("abierta");
  menuBoton.setAttribute("aria-expanded", String(abierto));
  menuBoton.textContent = abierto ? "✕" : "☰";
});

// 3. Bucle: cerramos el menú al elegir cualquier enlace.
const enlaces = navegacion.querySelectorAll("a");
for (let i = 0; i < enlaces.length; i += 1) {
  enlaces[i].addEventListener("click", function () {
    navegacion.classList.remove("abierta");
    menuBoton.setAttribute("aria-expanded", "false");
    menuBoton.textContent = "☰";
  });
}

// 4. Filtrado de fotografías con condicionales.
const filtros = document.querySelectorAll(".filtro");
const fotos = document.querySelectorAll(".foto");

function filtrarFotos(categoria) {
  for (let i = 0; i < fotos.length; i += 1) {
    const foto = fotos[i];
    // Si el filtro es "todos" o coincide con la categoría, mostramos la foto.
    if (categoria === "todos" || foto.dataset.categoria === categoria) {
      foto.hidden = false;
    } else {
      foto.hidden = true;
    }
  }
}

for (let i = 0; i < filtros.length; i += 1) {
  filtros[i].addEventListener("click", function () {
    const categoria = filtros[i].dataset.filtro;
    filtrarFotos(categoria);
    // Marcamos visualmente el botón seleccionado.
    for (let j = 0; j < filtros.length; j += 1) {
      const seleccionado = filtros[j] === filtros[i];
      filtros[j].classList.toggle("activo", seleccionado);
      filtros[j].setAttribute("aria-pressed", String(seleccionado));
    }
  });
}
