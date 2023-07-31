const { createApp } = require('vue');

import './assets/styles.css'
import App from "./App.vue";
import router from './router/'


const app = createApp(App)
app.use(router)
app.mount("#app");