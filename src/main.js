import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import router from "./router";
import "./resources";
import "./stores/";
import "./assets/sass/style.scss";
import "vuetify/styles";

const vuetify = createVuetify({
  components,
  directives,
  rtl: true,
});

const app = createApp(App);

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
