// src/main.js
import { createApp } from 'vue';
import App from './app.js'; // Your main app logic
import router from './router'; // Optional: if using Vue Router

createApp(App)
  .use(router) // Include if you’re using Vue Router
  .mount('#app');


