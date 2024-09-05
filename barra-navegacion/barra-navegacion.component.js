import html from "./barra-navegacion.component.html?inline";
import css from "./barra-navegacion.component.css?inline";

const template = document.createElement("template");
template.innerHTML = `${html}<style>${css}</style>`;

export const APP_CONTENT_TAG_NAME = "app-barra-navegacion";

export class AppContentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
}

export function incluirBarraNavegacion() {
  import("./barra-navegacion").then(() => {
    document.querySelector("#app-barra-navegacion").outerHTML =
      "<app-barra-navegacion></app-barra-navegacion>";
  });
}
