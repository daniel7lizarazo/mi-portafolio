import html from "./content.component.html?inline";
import css from "./content.component.css?inline";

const template = document.createElement("template");
template.innerHTML = `${html}<style>${css}</style>`;

export const APP_CONTENT_TAG_NAME = "app-content";

export class AppContentComponent extends HTMLElement {
  static get observedAttributes() {
    return ["number"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}
