import html from "./proyectos.component.html?inline";
import css from "./proyectos.component.css?inline";
import { parAnchorElemento, grupoParAnchorElemento } from "../utils/classes.js";

const template = document.createElement("template");
template.innerHTML = `${html}<style>${css}</style>`;

export const APP_CONTENT_TAG_NAME = "app-proyectos";

export class AppContentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const grupoAnchorElementos = [];
    this.shadowRoot
      .querySelectorAll(".anchor-lista-proyectos")
      .forEach((anchorElement) => {
        if (anchorElement.href === undefined) {
          return;
        }

        const linkedElementSelector = `#${anchorElement.href.split("#")[1]}`;

        const linkedElement = this.shadowRoot.querySelector(
          linkedElementSelector,
        );

        if (linkedElement == null) {
          return;
        }

        const par = {
          anchorElement: anchorElement,
          linkedElement: linkedElement,
        };

        grupoAnchorElementos.push(par);
      });

    grupoAnchorElementos.forEach((par) => {
      par.anchorElement.addEventListener("mousedown", () => {
        par.linkedElement.scrollIntoView({ block: "nearest" });
      });
    });

    this.shadowRoot
      .querySelector(".especificaciones-proyecto")
      ?.addEventListener("scrollsnapchanging", (e) => {
        console.log("se activo snapping ", e);
        this.shadowRoot
          .querySelector(".proyecto-actual")
          ?.classList.remove("proyecto-actual");

        this.shadowRoot
          .querySelector(`a[href="#${e.snapTargetInline.id}"]`)
          .classList.add("proyecto-actual");
      });
  }
}

export function incluirProyectos() {
  import("./proyectos").then(() => {
    document.querySelector("#app-proyectos").outerHTML =
      "<app-proyectos></app-proyectos>";
  });
}
