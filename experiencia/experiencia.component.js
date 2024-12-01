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

  connectedCallback() {
    const imagenExperiencia1 = this.shadowRoot.querySelector(
      ".imagen-experiencia-1",
    );
    const imagenExperiencia2 = this.shadowRoot.querySelector(
      ".imagen-experiencia-2",
    );
    const imagenExperiencia3 = this.shadowRoot.querySelector(
      ".imagen-experiencia-3",
    );
    const barraProgreso = this.shadowRoot.querySelector("#progreso");

    this.shadowRoot
      .querySelector(".experiencia-1")
      .addEventListener("mouseover", () => {
        imagenExperiencia1.classList.add("imagen-visible");
        barraProgreso.style.left = "-600px";
      });
    this.shadowRoot
      .querySelector(".experiencia-2")
      .addEventListener("mouseover", () => {
        imagenExperiencia2.classList.add("imagen-visible");
        barraProgreso.style.left = "-350px";
      });
    this.shadowRoot
      .querySelector(".experiencia-3")
      .addEventListener("mouseover", () => {
        imagenExperiencia3.classList.add("imagen-visible");
        barraProgreso.style.left = "-100px";
      });
  }
}

export function incluirExperiencia() {
  import("./experiencia").then(() => {
    document.querySelector("#app-experiencia").outerHTML =
      "<app-experiencia></app-experiencia>";
  });
}
