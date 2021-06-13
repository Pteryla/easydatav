const state = () => ({
  // echarts组件
  echarts: {
    barCharts: {
      id: 'barCharts',
      name: '条形图',
      icon: '',
      componentsDataSet: [],
    },
    pieCharts: {
      id: 'pieCharts',
      name: '条形图',
      icon: '',
      componentsDataSet: [],
    },
  },
  // 头部组件
  headers: {},
  // borders 边框组件
  borders: {},
  // 按钮组件
  buttons: {},
  // 场景切换组件
  scenerySwitchers: {},
});
const getters = {};
const actions = {};
const mutations = {};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
