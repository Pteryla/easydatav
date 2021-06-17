const state = () => ({
  // echarts组件
  echarts: {
    id: 'echarts',
    name: 'Echarts',
    icon: '',
    subSet: {
      barCharts: {
        id: 'barCharts',
        name: '条形图',
        icon: '',
        subSet: [
          {
            edv_name: '条形图1',
            edv_icon: '',
            edv_componentName: 'EdvBarChart1',
            edv_id: '',
            edv_style: {
              containerStyle: {
                width: 200,
                height: 100,
                left: 0,
                top: 0,
                backgroundColor: '#fff',
                opacity: 1,
              },
            },
            edv_data: {},
            edv_events: {},
            edv_tasks: {},
          },
          {
            edv_name: '条形图2',
            edv_icon: '',
            edv_componentName: 'EdvBarChart2',
            edv_id: '',
            edv_style: {
              containerStyle: {
                width: 200,
                height: 100,
                left: 0,
                top: 0,
                backgroundColor: '#fff',
                opacity: 1,
              },
            },
            edv_data: {},
            edv_events: {},
            edv_tasks: {},
          },
        ],
      },
      pieCharts: {
        id: 'pieCharts',
        name: '饼状图',
        icon: '',
        subSet: [],
      },
    },
  },
  // borders 边框组件
  borders: {
    id: 'borders',
    name: '边框',
    icon: '',
    subSet: {},
  },
  // 按钮组件
  uis: {
    id: 'uis',
    name: 'UI组件',
    icon: '',
    subSet: {},
  },
  // 头部组件
  headers: {
    id: 'headers',
    name: '头部',
    icon: '',
    subSet: {},
  },

  // 场景切换组件
  scenerySwitchers: {
    id: 'scenerySwitchers',
    name: '场景切换',
    icon: '',
    subSet: {},
  },
  backgrounds: {
    id: 'backgrounds',
    name: '背景',
    icon: '',
    subSet: {},
  },
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
