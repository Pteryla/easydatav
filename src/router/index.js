import { createRouter, createWebHashHistory } from 'vue-router';
import Projects from '../views/Projects.vue';
import Visit from '../views/Visit.vue';

const routes = [
  {
    path: '/',
    name: 'Workbench',
    component: () => import(/* webpackChunkName: "workbench" */ '../views/Workbench.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import(/* webpackChunkName: "preview" */ '../views/Preview.vue'),
  },
  {
    path: '/visit',
    name: 'Visit',
    component: Visit,
  },
  {
    path: '/config',
    name: 'Config',
    component: () => import(/* webpackChunkName: "config" */ '../views/Config.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
