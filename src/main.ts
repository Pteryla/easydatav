import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import 'normalize.css'
import installElementPlus from './plugins/element'
import installAntD from './plugins/antd'

const app = createApp(App)
installElementPlus(app)
installAntD(app)
app.use(store, key).use(router).mount('#app')