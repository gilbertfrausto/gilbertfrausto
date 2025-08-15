import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './routes/Home.vue'
import About from './routes/About.vue'
import Contact from './routes/Contact.vue'
import Projects from './routes/Projects.vue';

export const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'Projects', path: '/projects', component: Projects },
  { name: 'About', path: '/about', component: About },
  { name: 'Contact', path: '/contact', component: Contact },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});