import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import { fa } from "vuetify/locale";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import axios from "axios";
import App from "./App.vue";
import "./resources";
import "./stores/";
import "./assets/sass/style.scss";
import "vuetify/styles";
import router from "./router";
// import '@mdi/font/css/materialdesignicons.css'

// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

// // const token = localStorage.getItem("token");

// // if (token) {
// //   axios.defaults.headers.common["Access-Control-Allow-Credentials"] = "true";
// //   axios.defaults.headers.common["Access-Control-Allow-Methods"] =
// //     "GET, POST, PUT, DELETE, OPTIONS";
// //   axios.defaults.headers.common["Access-Control-Allow-Headers"] =
// //     'Origin, X-Requested-With, Content-Type, Accept, " + "X-CSRF-TOKEN';
// //   axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
// // }

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

app.use(createPinia());
app.use(vuetify);
app.use(router);

app.mount("#app");
