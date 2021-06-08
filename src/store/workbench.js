const state = () => ({
  screen: {
    position: {
      left: 20,
      top: 20,
    },
    size: {
      width: 350,
      height: 600,
    },
    sizeRatio: {
      widthRatio: 100,
      heightRatio: 100,
    },
    backgroundColor: '#ccc',
  },
});

const getters = {};
const actions = {};
const mutations = {
  set_position(state, position) {
    let { left, top } = position;
    state.screen.position.left = left;
    state.screen.position.top = top;
  },
  set_size(state, size) {
    let { width, height } = size;
    state.screen.size.width = width;
    state.screen.size.height = height;
  },
  set_sizeRatio(state, sizeRatio) {
    let { widthRatio, heightRatio } = sizeRatio;
    state.screen.sizeRatio.widthRatio = widthRatio;
    state.screen.sizeRatio.heightRatio = heightRatio;
  },
  set_backgroundColor(state, color) {
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
