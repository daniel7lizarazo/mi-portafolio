import html from "./reloj.component.html?inline";
import css from "./reloj.component.css?inline";

const template = document.createElement("template");
template.innerHTML = `${html}<style>${css}</style>`;

export const APP_CONTENT_TAG_NAME = "app-reloj";

const opcionesTiempo = {
  timeZone: "America/Bogota",
  timeStyle: "short",
  hourCycle: "h24",
};

export class AppContentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const nodoTiempo = this.shadowRoot.querySelector("#hora-contenido");
    const actualizarTiempo = () => {
      let textoTiempo = new Date()
        .toLocaleString("es-MX", opcionesTiempo)
        .toString("HH mm");
      nodoTiempo.innerHTML = textoTiempo;
    };
    setInterval(actualizarTiempo, 1000);
    actualizarTiempo();
  }
}

export function incluirReloj() {
  import("./reloj").then(() => {
    document.querySelector("#app-reloj").outerHTML = "<app-reloj></app-reloj>";
  });
}
