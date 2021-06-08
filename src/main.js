import { createApp } from 'vue';
import App from './App.vue';
import '@/scss/common.scss';
import '@/scss/normalize.scss';
import router from './router';
import store from './store';
import installElementPlus from './plugins/element';
import axios from 'axios';
import VueAxios from 'vue-axios';
import _ from 'lodash';
import tinycolor from 'tinycolor2'

const app = createApp(App);

app.config.globalProperties.lodash = _
app.config.globalProperties.tinycolor = tinycolor

installElementPlus(app);
app
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app');
