import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import { fa } from 'vuetify/locale'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import router from "./router";
import "./resources";
import "./stores/";
import "./assets/sass/style.scss";
import "vuetify/styles";
// import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: "fa",
    fallback: "fa",
    messages: { fa },
    rtl: { fa: true },
  },
});

const app = createApp(App);

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
