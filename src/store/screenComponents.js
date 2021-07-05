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
            name: '条形图1',
            icon: 'img/components/echarts/barcharts/barchart1.png',
            id: '',
            // 层级索引
            index: 0,
            canBeUpper: false,
            canBeLower: false,
            componentName: 'EdvBarChart1',
            // 组件样式
            // public/ 
            componentStyle: {
              containerStyle: {
                name: '容器样式',
                width: 200,
                height: 100,
                left: 0,
                top: 0,
                rotate: 0,
                backgroundColor: '#fff',
                opacity: 1,
              },
              echartsStyle: {
                name: '图标样式',
              },
            },
            // 组件数据
            componentData: {},
            // 组件事件
            componentEvents: {},
            // 组件任务
            componentTasks: {},
          },
          {
            name: '条形图2',
            icon: 'img/components/echarts/barcharts/barchart1.png',
            id: '',
            index: 0,
            canBeUpper: false,
            canBeLower: false,
            componentName: 'EdvBarChart2',
            // 组件样式
            componentStyle: {
              containerStyle: {
                name: '容器样式',
                width: 200,
                height: 100,
                left: 0,
                top: 0,
                rotate: 0,
                backgroundColor: '#fff',
                opacity: 1,
              },
              echartsStyle: {
                name: '图标样式',
              },
            },
            // 组件数据
            componentData: {},
            // 组件事件
            componentEvents: {},
            // 组件任务
            componentTasks: {},
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
