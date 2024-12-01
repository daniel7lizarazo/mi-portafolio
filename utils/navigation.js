// Lista de rutas
// "_ruta_" : "_idElemento_"
const rutas = {
  "/": "inicio",
  "/experiencia": "experiencia",
  "/proyectos": "proyectos",
  "/contacto": "contacto",
};

// Obtener la ruta actual
function obtenerRutaActual() {
  return window.location.pathname || "/";
}

// Funcion de navegacion
function navegar(ruta) {
  window.history.pushState({}, "", ruta);
  dibujarPagina();
}

// Funcion para dibujar la página
function dibujarPagina() {
  const rutaActual = obtenerRutaActual();
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

function alistarNavegacion(host) {
  window.addEventListener("popstate", dibujarPagina);
  host.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (evento) => {
      evento.preventDefault();
      navegar(evento.target.getAttribute("href"));
    });
  });
}

function iniciarNavegacion(host) {
  dibujarPagina();
  alistarNavegacion(host);
}

// Event listeners
// "host" para elementos en el shawdow DOM o "document" para elementos en el DOM
export function iniciarNavegacionExterno(host) {
  iniciarNavegacion(host);
  host.addEventListener("DOMContentLoaded", () => {
    dibujarPagina();
  });
}
