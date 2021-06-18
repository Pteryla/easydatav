import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Workbench',
    component: () => import(/* webpackChunkName: "workbench" */ '../views/Workbench.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import(/* webpackChunkName: "preview" */ '../views/Preview.vue'),
  },
  {
    path: '/visit',
    name: 'Visit',
    component: () => import(/* webpackChunkName: "visit" */ '../views/Visit.vue'),
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
