import html from "./experiencia.component.html?inline";
import css from "./experiencia.component.css?inline";

const template = document.createElement("template");
template.innerHTML = `${html}<style>${css}</style>`;

export const APP_CONTENT_TAG_NAME = "app-experiencia";

export class AppContentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
}

export function incluirExperiencia() {
  import("./experiencia").then(() => {
    document.querySelector("#app-experiencia").outerHTML =
      "<app-experiencia></app-experiencia>";
  });
}
