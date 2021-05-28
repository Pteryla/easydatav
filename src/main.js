import { createApp } from 'vue';
import App from './App.vue';
import '@/scss/common.scss';
import '@/scss/normalize.scss';
import router from './router';
import store from './store';
import installElementPlus from './plugins/element';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);
installElementPlus(app);
app
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app');
