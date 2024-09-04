import { APP_CONTENT_TAG_NAME, AppContentComponent } from "./reloj.component";

if (customElements.get(APP_CONTENT_TAG_NAME) === undefined) {
  customElements.define(APP_CONTENT_TAG_NAME, AppContentComponent);
}
