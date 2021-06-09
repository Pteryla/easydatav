const state = () => ({
  // echarts组件
  echarts: {
    barCharts: {
      name: '条形图',
      icon: '',
      componentsDataSet: [
        {
          name: '条形图1',
          icon: '',
          componentName: 'EchartsBarChart1',
          componentData: {
            style: {
              width: '100px',
              height: '100px',
              backgroundColor: '#ccc',
              fontSize: '12px',
            },
            data: {},
            events: {},
            tasks: {},
          },
        },
      ],
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
  namespace: true,
  state,
  getters,
  mutations,
  actions,
};
