import html from "./blob.component.html?inline";
import css from "./blob.component.css?inline";
import { amortiguador } from "../utils/utils";

const template = document.createElement("template");
template.innerHTML = `${html}<style>${css}</style>`;

export const APP_CONTENT_TAG_NAME = "app-blob";

export class AppContentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    //   const svgElement = this.shadowRoot.querySelector("svg");
    //   let anchoVentana = window.innerWidth;
    //   let posXN;
    //   let posYN;
    //   let colorHue = 280;
    //   const mover = (e) => {
    //     posXN = e.clientX - 350;
    //     posYN = e.clientY - 250;
    //     // 280 es el HUE del color inicial, morado
    //     // 160 es el valor para centrar el cambio de color
    //     // 80 es la distancia entre los hue: 280 (moraro) y 360 (rojo)
    //     colorHue = (
    //       280 +
    //       ((svgElement.getBoundingClientRect().left + 160) / anchoVentana) * 80
    //     ).toFixed(2);
    //
    //     svgElement.style.setProperty("--position-x", `${posXN}px`);
    //     svgElement.style.setProperty("--position-y", `${posYN}px`);
    //     svgElement.style.setProperty(
    //       "--color-relleno",
    //       `hsl(${colorHue} 100% 50%)`,
    //     );
    //   };
    //   const moverAmortiguado = amortiguador(mover, 200);
    //   document.addEventListener("mousemove", moverAmortiguado);
    //   window.addEventListener("resize", (_) => {
    //     anchoVentana = window.innerWidth;
    //   });
  }
}

// export function incluirBlob() {
//   import("./blob").then(() => {
//     document.querySelector("#app-blob").outerHTML = "<app-blob></app-blob>";
//   });
// }
