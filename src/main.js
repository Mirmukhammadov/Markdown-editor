import { createApp } from "vue";
// import { createPinia } from "pinia";

import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App);

// const isDarkMode = localStorage.getItem("darkmode") == "true";

// // Add the class to the HTML root
// if (isDarkMode) {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }

// app.use(createPinia());
// app.use(router);

app.mount("#app");
