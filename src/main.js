import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueSplide from '@splidejs/vue-splide';

import './style.css';

import App from './App.vue';
import { router } from './router';

createApp(App)
  .use(router)
  .use(VueSplide)
  .use(createPinia())
  .mount('#app');
