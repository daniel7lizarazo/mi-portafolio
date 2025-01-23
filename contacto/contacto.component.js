import html from "./contacto.component.html?inline";
import css from "./contacto.component.css?inline";

const template = document.createElement("template");
template.innerHTML = `${html}<style>${css}</style>`;

export const APP_CONTENT_TAG_NAME = "app-contacto";

export class AppContentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
}

export function incluirContacto() {
  import("./contacto").then(() => {
    document.querySelector("#app-contacto").outerHTML =
      "<app-contacto></app-contacto>";
  });
}
