import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { ElMessage } from 'element-plus';
import installElementPlus from './plugins/element';
import Api from './Api.js'
import '@/scss/common.scss';
import '@/scss/normalize.scss';
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App);

app.config.globalProperties.$ElMessage = ElMessage
app.config.globalProperties.$Api = Api
installElementPlus(app);
app.use(VueAxios, axios)
app.use(store).use(router).mount('#app');


