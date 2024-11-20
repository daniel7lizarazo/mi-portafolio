// Lista de rutas
// "_ruta_" : "_idElemento_"
const rutas = {
  "/": "inicio",
  "/experiencia": "experiencia",
  "/proyectos": "proyectos",
  "/contacto": "contacto",
};

// Obtener la ruta actual
function obterRutaActual() {
  return window.location.pathname || "/";
}

// Funcion de navegacion
function navegar(ruta) {
  console.log("pasa por la ruta ", ruta);
  window.history.pushState({}, "", ruta);
  dibujarPagina();
}

// Funcion para dibujar la página
function dibujarPagina() {
  const rutaActual = obterRutaActual();
  const idPagina = rutas[rutaActual];

  // Ocultar todas las páginas
  document
    .querySelectorAll(".pagina")
    .forEach((pagina) => (pagina.style.display = "none"));

  // Mostrar página actual
  const paginaActual = document.getElementById(idPagina);
  paginaActual.style.display = "block";

  // Agregar efecto de transición
  paginaActual.classList.add("aparecer");
}

// Event listeners
// "host" for shawdow elements or "document" for regular ones
export function iniciarNavegacion(host) {
  window.addEventListener("popstate", dibujarPagina);
  host.querySelectorAll("a").forEach((link) => {
    console.log(link);
    link.addEventListener("click", (evento) => {
      console.log("pasa por iniciarNavegacion con el elemento", evento.target);
      evento.preventDefault();
      navegar(evento.target.getAttribute("href"));
    });
  });

  host.addEventListener("DOMContentLoaded", () => {
    dibujarPagina();
  });
}
