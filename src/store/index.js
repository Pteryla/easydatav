import { createStore } from 'vuex';
import projects from './projects.js';
import workbench from './workbench.js';
import components from './components.js';
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    projects,
    workbench,
    components,
  },
});
