import html from "./nombre-principal.component.html?inline";
import css from "./nombre-principal.component.css?inline";

const template = document.createElement("template");
template.innerHTML = `${html}<style>${css}</style>`;

export const APP_CONTENT_TAG_NAME = "app-nombre-principal";

export class AppContentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
}

export function incluirNombrePrincipal() {
  import("./nombre-principal").then(() => {
    document.querySelector("#app-nombre-principal").outerHTML =
      "<app-nombre-principal></app-nombre-principal>";
  });
}
