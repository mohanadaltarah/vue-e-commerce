import router from "./router";

import { createApp } from "vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import { createPinia } from "pinia";
import mitt from "mitt";

// Components
import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
});

const emitter = mitt();

createApp(App)
  .use(vuetify)
  .provide("Emitter", emitter)
  .use(createPinia())
  .use(router)
  .mount("#app");
