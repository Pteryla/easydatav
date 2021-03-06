import { nanoid } from 'nanoid';

const state = () => ({
  // 编辑台屏幕信息
  visitMode: 'Edit',
  isMouseEnterWorkbench: false,
  screen: {
    position: {
      left: 100,
      top: 100,
    },
    size: {
      width: 350,
      height: 600,
    },
    // 尺寸缩放比例
    sizeRatio: {
      widthRatio: 100,
      heightRatio: 100,
    },
    backgroundColor: '#ccc',
  },
  // 当前场景的id
  currentSceneId: 'default scene',
  // 当前选中组件的数据
  currentComponentData: {},
  // 当前场景
  currentScene: {
    id: 'default scene',
    name: '默认场景',
    icon: '',
    image: '',
    componentsData: [],
  },
  // 所有场景的列表
  sceneryList: [
    {
      id: 'default scene',
      name: '默认场景',
      icon: '',
      image: '',
      componentsData: [],
    },
    {
      id: 'default scene2',
      name: '默认场景2s',
      icon: '',
      image: '',
      componentsData: [],
    },
  ],
  projectInfo: {
    // 项目名称
    title: '大数据展示Demo',
    // 项目描述
    description: '',
    // 项目标签
    tags: [],
    // 是否发布
    isPublish: false,
    publishInfo: {
      // 发布访问地址
      Url: 'https://www.mydatav.com',
      isUsePassword: false,
      password: '12345',
      // 发布状态 public 公开  private 私人 访问需要验证登陆
      status: 'public',
    },
  },
});

const getters = {};
const actions = {};
const mutations = {
  setVisitMode(state, val) {
    state.visitMode = val;
  },
  // 设置screen组件位置
  setScreenPosition(state, position) {
    const { left, top } = position;
    state.screen.position.left = left;
    state.screen.position.top = top;
  },
  // 设置screen组件的大小
  setScreenSize(state, size) {
    const { width, height } = size;
    state.screen.size.width = width;
    state.screen.size.height = height;
  },
  // 设置screen组件的长宽缩放比例
  setScreenSizeRatio(state, sizeRatio) {
    const { widthRatio, heightRatio } = sizeRatio;
    state.screen.sizeRatio.widthRatio = widthRatio;
    state.screen.sizeRatio.heightRatio = heightRatio;
  },
  // 设置screen组件的背景颜色
  setScreenBackgroundColor(state, color) {
    state.screen.backgroundColor = color;
  },

  addComponentToCurrentScene(state, component) {
    // 添加组件 判断当前场景是否存在 以及鼠标是否在 workbench内
    if (state?.currentScene?.componentsData && state.isMouseEnterWorkbench) {
      // 赋予一个id值
      component.id = nanoid();
      // 添加到当前场景组件数组
      state.currentScene.componentsData.push(component);
      // 更新组件图层是否可以调整
      state.currentScene.componentsData.forEach((item, index) => {
        item.index = index;
        if (index === 0) {
          if (state.currentScene.componentsData.length === 1) {
            item.canBeUpper = false;
            item.canBeLower = false;
          } else {
            item.canBeUpper = true;
            item.canBeLower = false;
          }
        } else if (index === state.currentScene.componentsData.length - 1) {
          item.canBeUpper = false;
          item.canBeLower = true;
        } else {
          item.canBeUpper = true;
          item.canBeLower = true;
        }
      });
      // 传递给当前组件数据
      state.currentComponentData = component;
      console.log(state.currentScene);
    }
  },
  // 从当前场景中移除组件
  removeComponentFromCurrentSceneById(state, id) {
    if (state?.currentScene?.componentsData) {
      const index = state.currentScene.componentsData.findIndex(item => item.id === id);
      state.currentScene.componentsData.splice(index, 1);
    }
  },
  // 从当前场景中移除所有组件
  purgeAllComponentsFromCurrentScene(state) {
    if (state?.currentScene?.componentsData && state?.currentScene?.componentsData.length >= 1) {
      state.currentScene.componentsData = [];
    }
  },
  // 设置当前显示场景
  setCurrentSceneById(state, id) {
    const targetScene = state.sceneryList.find(item => item.id === id);
    if (targetScene) {
      state.currentScene = targetScene;
      state.currentSceneId = id;
    }
  },
  setMouseEnterWorkbenchStatus(state, status) {
    state.isMouseEnterWorkbench = status;
  },
  setCurrentComponentData(state, component) {
    console.log('尝试更新当前选中组件数据');
    // 判断当前组件id是否与设置组件的id一致，如果不一致则替换数据
    if (state.currentComponentData.id !== component.id) {
      state.currentComponentData = component;
      console.log('成功更新当前选中组件数据');
    }
  },
  // 修改当前选中组件的数据 数据合并
  modCurrentComponentData(state, dataObject) {
    for (let key in dataObject) {
      if (Object.keys(dataObject[key]).length >= 1 && typeof dataObject[key] === 'object') {
        for (let subKey in dataObject[key]) {
          if (Object.keys(dataObject[key][subKey]).length >= 1 && typeof dataObject[key][subKey] === 'object') {
            for (let subKey2 in dataObject[key][subKey]) {
              if (
                Object.keys(dataObject[key][subKey][subKey2]).length >= 1 &&
                typeof dataObject[key][subKey][subKey2] === 'object'
              ) {
                for (let subKey3 in dataObject[key][subKey][subKey2]) {
                  state.currentComponentData[key][subKey][subKey2][subKey3] = dataObject[key][subKey][subKey2][subKey3];
                }
              } else {
                state.currentComponentData[key][subKey][subKey2] = dataObject[key][subKey][subKey2];
              }
            }
          } else {
            state.currentComponentData[key][subKey] = dataObject[key][subKey];
          }
        }
      } else {
        state.currentComponentData[key] = dataObject[key];
      }
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
