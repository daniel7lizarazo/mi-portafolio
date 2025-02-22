import emailjs from "@emailjs/browser";
import css from "./contacto.component.css?inline";
import html from "./contacto.component.html?inline";

const template = document.createElement("template");
template.innerHTML = `${html}<style>${css}</style>`;

export const APP_CONTENT_TAG_NAME = "app-contacto";

export class AppContentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    emailjs.init({
      publicKey: "2PBhBYC4jy8WS86PX",
    });

    this.shadowRoot
      ?.getElementById("formulario-contacto")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs
          .sendForm("contacto_portafolio", "formulario_portafolio", this)
          .then(
            () => {
              this.classList.add("formulario-enviado");
              this.querySelector("button").innerHTML = "Enviado";
            },
            (error) => {
              console.log("No se pudo enviar.", error);
            },
          );
      });
  }
}

export function incluirContacto() {
  import("./contacto").then(() => {
    document.querySelector("#app-contacto").outerHTML =
      "<app-contacto></app-contacto>";
  });
}
