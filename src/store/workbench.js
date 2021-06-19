import { nanoid } from 'nanoid';
import lodash from 'lodash';

const state = () => ({
  // 编辑台屏幕信息
  isMouseEnterWorkbench: true,
  screen: {
    isMouseEnter: true,
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
      // 深度拷贝
      const addComponent = lodash.cloneDeep(component);
      // 赋予一个id值
      addComponent.id = nanoid();
      // 添加到当前场景组件数组
      state.currentScene.componentsData.push(addComponent);
      // 更新组件图层是否可以调整
      state.currentScene.componentsData.forEach((item, index) => {
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
      state.currentComponentData = addComponent;
      console.log(state.currentScene.componentsData);
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
    state.currentScene.componentsData = [];
  },
  // 设置当前显示场景
  setCurrentSceneById(state, id) {
    const targetScene = state.sceneryList.find(item => item.id === id);
    if (targetScene) {
      state.currentScene = targetScene;
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
