import {
  APP_CONTENT_TAG_NAME,
  AppContentComponent,
} from "./experiencia.component";

if (customElements.get(APP_CONTENT_TAG_NAME) === undefined) {
  customElements.define(APP_CONTENT_TAG_NAME, AppContentComponent);
}