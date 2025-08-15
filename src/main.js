import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueSplide from '@splidejs/vue-splide';
import { startAnalytics } from './firebase';

import './style.css';

import App from './App.vue';
import { router } from './router';

startAnalytics();

createApp(App)
  .use(router)
  .use(VueSplide)
  .use(createPinia())
  .mount('#app');
