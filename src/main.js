import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import i18n from "./i18n/i18n";

const app = createApp(App);

app.use(router).use(i18n).use(MotionPlugin);

app.mount("#app");
