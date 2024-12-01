import html from "./proyectos.component.html?inline";
import css from "./proyectos.component.css?inline";

const template = document.createElement("template");
template.innerHTML = `${html}<style>${css}</style>`;

export const APP_CONTENT_TAG_NAME = "app-proyectos";

export class AppContentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
}

export function incluirProyectos() {
  import("./proyectos").then(() => {
    document.querySelector("#app-proyectos").outerHTML =
      "<app-proyectos></app-proyectos>";
  });
}
