import html from "./blob.component.html?inline";
import css from "./blob.component.css?inline";

const template = document.createElement("template");
template.innerHTML = `${html}<style>${css}</style>`;

export const APP_CONTENT_TAG_NAME = "app-blob";

// const opcionesTiempo = {
//   timeZone: "America/Bogota",
//   timeStyle: "short",
//   hourCycle: "h24",
// };

export class AppContentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const svgElement = this.shadowRoot.querySelector("svg");
    let timerId;
    let counter = 0;
    let posX = 100;
    let posY = 100;
    const amortiguador = (fn, t) => {
      if (timerId) {
        return;
      }
      timerId = setTimeout(() => {
        fn();
        timerId = undefined;
      }, t);
    };
    const mover = () => {
      console.log(counter);
      counter += 1;
      posX -= 100;
      posY -= 120;
      svgElement.style.setProperty("--position-x", `${posX}px`);
      svgElement.style.setProperty("--position-y", `${posY}px`);
    };

    document.addEventListener("mousemove", (e) => {
      posX = e.clientX;
      posY = e.clientY;
      amortiguador(mover, 400);
      // mover(e.clientX, e.clientY);
    });
  }
}

export function incluirBlob() {
  import("./blob").then(() => {
    document.querySelector("#app-blob").outerHTML = "<app-blob></app-blob>";
  });
}
