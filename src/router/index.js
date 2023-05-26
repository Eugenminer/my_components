import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/pages/mainPage.vue';

const routes = [
  { name: 'main', component: MainPage, path: '/' },
];

const router = createRouter({
  // предоставляем реализацию истории посещений
  history: createWebHashHistory(),
  routes,
});

export default router;
