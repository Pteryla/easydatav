const state = () => ({
  // 编辑台屏幕信息
  screen: {
    isMouseEnter: false,
    position: {
      left: 20,
      top: 20,
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
  set_screenPosition(state, position) {
    let { left, top } = position;
    state.screen.position.left = left;
    state.screen.position.top = top;
  },
  set_screenSize(state, size) {
    let { width, height } = size;
    state.screen.size.width = width;
    state.screen.size.height = height;
  },
  set_screenSizeRatio(state, sizeRatio) {
    let { widthRatio, heightRatio } = sizeRatio;
    state.screen.sizeRatio.widthRatio = widthRatio;
    state.screen.sizeRatio.heightRatio = heightRatio;
  },
  set_screenBackgroundColor(state, color) {
    state.screen.backgroundColor = color;
  },
};

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
};
